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
      this.age = "child";
    } else if (age_range == 1) {
      this.age = "young_adult";
    } else {
      this.age = "adult";
    }

    this.library = [];
  }

  generateBookList() {
    

    this.library.push(new_book);
  }

  get description() {
    return this.description;
  }
}