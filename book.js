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

  /**
  * Constructs a Book instance by setting instance variables.
  *
  * @param {String} id - The book ID provided from API call.
  * @param {int} image_link - Book cover image provided from API call.
  * @param {int} amazon_url - The URL to purchase provided from API call.
  */
  constructor(id, image_link, amazon_url) {
    this.id = id;
    this.image_link = image_link;
    this.amazon_url = amazon_url;
  }

  /**
  * Sends an asynchronous fetch request to the NY Times Best Sellers API.
  *   Parses and generates Book objects. Inserts Book HTML into page.
  */
  getHtml() {
    let html_string = "<a href=\"" + this.amazon_url + "\" target=\"_blank\">";
    html_string += "<div class=\"book\" id=\"book_" + this.id + "\" ";
    html_string += "style=\"background-image: url(" + this.image_link +")\"";
    html_string += "></div></a>";
    return html_string;
  }
}