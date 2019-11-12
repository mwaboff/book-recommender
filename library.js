/*//////////////////////////////////////
//
//  Front-End Book Recommender
// 
//    Michael Aboff
//    mwaboff@gmail.com
//    https://github.com/mwaboff
//
//    DSN6040 - Web Design and Javascript
//
//////////////////////////////////////*/

class Library {
  constructor(age_range, api_key) {
    this.setAge(age_range);
    this.api_key = api_key;

  }

  /**
  * Updates the booklist string to match the age_range provided by the user.
  *
  * @param {int} age_range - The int provided by drop down on UI.
  */
  setAge(age_range) {
    // Using if/else to meet criteria of the project prompt instead of switch.
    if (age_range == 0) {
      this.booklist = "picture-books.json"
    } else if (age_range == 1) {
      this.booklist = "young-adult-paperback-monthly.json";
    } else {
      this.booklist = "trade-fiction-paperback.json";
    }
  }

  /**
  * Sends an asynchronous fetch request to the NY Times Best Sellers API.
  *   Parses and generates Book objects. Inserts Book HTML into page.
  */
  async generateBookList() {
    let request_url, data, book_list;

    request_url = "https://api.nytimes.com/svc/books/v3/lists/current/" + this.booklist;
    request_url += "?api-key="+this.api_key;

    Recommender.loadingBookRec();

    data = await fetch(request_url)
      .then(function(data){
        return data.json();
      })
      .catch(function(err){
        console.log("ERROR: " + err)
      });

    book_list = data["results"]["books"];

    Recommender.clearBookRec();

    for (var i = 0; i < book_list.length; i++) {
      let id, image, book, new_book, url;

      book = book_list[i];
      id = book["primary_isbn13"];
      image = book["book_image"];
      url = book["amazon_product_url"];

      new_book = new Book(id, image, url);
      document.getElementById("book_recommendations").innerHTML += new_book.getHtml();
    }
  }
}