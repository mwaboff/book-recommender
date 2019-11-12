////////////////////////////////////////
//
//  Front-End Book Recommender
// 
//    Michael Aboff
//    mwaboff@gmail.com
//    https://github.com/mwaboff
//
//    DSN6040 - Web Design and Javascript
//
////////////////////////////////////////


(function() {
  
  // Set the namespace to prevent any potential collisions.
  var Recommender = window.Recommender = (window.Recommender || {});

  // The New York Times Developer API key. Information found here:
  //   https://developer.nytimes.com/
  var API_KEY = "";


  /**
  * Generates an instance of the Library class.
  *
  * @return {Library} - An instance of the Library class.
  */
  var generateLibrary = Recommender.generateLibrary = function() {
    let library = new Library(0, API_KEY);
    return library;
  }


  /**
  * Clears the book recommendations section..
  */
  var clearBookRec = Recommender.clearBookRec = function() {
    document.getElementById("book_recommendations").innerHTML = ""; 
  }


  /**
  * Replaces the book recommendations section with a loading wheel.
  */
  var loadingBookRec = Recommender.loadingBookRec = function() {
    document.getElementById("book_recommendations").innerHTML = 
    "<img src=\"https://acegif.com/wp-content/uploads/loading-11.gif\" id=\"loading_gif\"/>"
  }
})();