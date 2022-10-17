//////////////////////////////////////////
/// Practical Exercise 2
//////////////////////////////////////////

// Functions
// let userName = prompt("Enter your name: ")

// function GetUserName(name) {
//     return name;
// }

// let currentUserName = GetUserName(userName)

// console.log(currentUserName);

// Objects
let myBook = {
  title: "Crooked Kingdom",
  author: "Leigh Bardugo",
  releaseDate: "2016-09-27",
  seriesDetails: {
    seriesType: "Duology",
    universeName: "Grishaverse",
    numberInSeries: 2,
  },
  readSeries: true,
  rating: function (rating) {
    return `${rating}/5`;
  },
};

console.log(myBook.title + " by " + myBook["author"]);
console.log(
  `Book #${myBook["seriesDetails"]["numberInSeries"]} of the ${myBook.seriesDetails.universeName}`
);
console.log("I rate it " + myBook.rating(5));
