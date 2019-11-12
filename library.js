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
  constructor(age_range) {
    // Using if/else to meet criteria of the project prompt instead of switch.
    if (age_range == 0) {
      this.booklist = "picture-books.json"
    } else if (age_range == 1) {
      this.booklist = "young-adult-paperback-monthly.json";
    } else {
      this.booklist = "trade-fiction-paperback.json";
    }

    this.api_key = "";

  }

  async requestBookList() {
    let request_url = "https://api.nytimes.com/svc/books/v3/lists/current/" + this.booklist;
    request_url += "?api-key="+this.api_key;
    
    let book_list = await fetch(request_url)
      .then(function(data){
        return data.json();
      })
      .catch(function(err){
        console.log("ERROR: " + err)
      });

    document.getElementById("loading_gif").classList.add("hidden");
    for (var i = 0; i < book_list["results"]["books"].length; i++) {
      console.log(book_list);
      let id, title, author, image, description, book, new_book, url;
      book = book_list["results"]["books"][i];
      id = book["primary_isbn13"];
      title = book["title"];
      author = book["author"];
      image = book["book_image"];
      description = book["description"];
      url = book["amazon_product_url"];

      new_book = new Book(id, title, author, description, image, url);
      document.getElementById("book_recommendations").innerHTML += new_book.getHtml();
    }
  }
}