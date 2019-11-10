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
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image_link = "url(https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SX330_BO1,204,203,200_.jpg)";
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
    // html_elem.innerText = this.title;
    return html_elem;
  }
}