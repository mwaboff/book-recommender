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

class Book {
  constructor(id, title, author, description, image_link) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.image_link = image_link;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getHtml() {
    let html_elem = document.createElement("div");
    html_elem.setAttribute("class", "book");
    html_elem.setAttribute("id", "book_" + this.id);
    html_elem.setAttribute("style", "background-image: "+this.image_link);
    return html_elem;
  }
}