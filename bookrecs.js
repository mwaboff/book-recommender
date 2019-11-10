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

  // Initializing variables.  


  /**
  * Initializes the calculator script.
  */
  var initialize = Recommender.initialize = function() {

  }

  /**
  * Initiates action when the login screen "Recommend a book" button is clicked.
  *
  * @param {String} name - The string set by the user in the #name_input field
  * @param {String} age_group - The value set by the user in the #login_age_input select.
  */ 
  var loginButtonClick = Recommender.loginButtonClick = function(name, age_group) {
    switchContent(1);
    setWelcomeText(name);
  }

  /**
  * Hides the login and replaces the GUI with the content page.
  *
  * @param {int} page_int - 0 reveals the login page; 1 reveals the content page
  */
  var switchContent = function(page_int) {
    var login_container = document.getElementById("login_container");
    var book_container = document.getElementById("outer_book_container"); 
    var signature = document.getElementById("signature");

    if (page_int === 0) {
      book_container.classList.add("hidden");
      login_container.classList.remove("hidden");
      signature.classList.remove("hidden");
    }
    else if (page_int === 1) {
      login_container.classList.add("hidden");
      signature.classList.add("hidden");
      book_container.classList.remove("hidden");
    }
  }

  /**
  * Sets the welcome text string based off of provided name.
  *
  * @param {String} name - Name provided by user, can be blank string.
  */
  var setWelcomeText = function(name) {
    let welcome_container = document.getElementById("welcome_text_container");
    var welcome_text;
    if (name) {
      welcome_text = "Welcome, " + name + "!";
    } else {
      welcome_text = "Welcome!";
    }
    welcome_container.innerText = welcome_text;
  }

  
})();