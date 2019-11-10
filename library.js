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

    this.book_list = [];

    this.requestBookList();
  }

  async requestBookList() {
    let request_url = "https://api.nytimes.com/svc/books/v3/lists/current/" + this.booklist;
    request_url += "?api-key="+this.api_key;
    
    let book_list = await fetch(request_url)
      .then(function(data){
        return data.json();
        // this.addBook(data);
      })
      .catch(function(err){
        console.log("ERROR: " + err)
      });

    this.processBookList(book_list["results"]["books"]);

  }
  
  processBookList(books) {
    console.log(this.books);
    console.log(this.booklist);

    for (var i = 0; i < books.length; i++) {
      let id, title, author, image, description, new_book;
      let book = books[i];
      id = book["primary_isbn13"];
      title = book["title"];
      author = book["author"];
      image = book["book_image"];
      description = book["description"];

      new_book = new Book(id, title, author, description, image);
      this.book_list.push(new_book);
    }
  }
  

  addBook(id, title, author, description, image) {
    console.log(data);
  }

  generateBookList() {
    this.library.push(new_book);
  }

  description() {
    return this.description;
  }
}