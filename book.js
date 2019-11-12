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
  constructor(id, title, author, description, image_link, amazon_url) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.image_link = image_link;
    this.amazon_url = amazon_url;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getHtml() {
    let html_string = "<a href=\"" + this.amazon_url + "\" target=\"_blank\">";
    html_string += "<div class=\"book\" id=\"book_" + this.id + "\" ";
    html_string += "style=\"background-image: url(" + this.image_link +")\"";
    html_string += "></div></a>";
    return html_string;
  }
}