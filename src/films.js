const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let directors = array.map(film => {
    return film.director;
  }) 
  console.log("EXERCICE 1 ->", directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesDirector = array.filter(movie => movie.director === director);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = getMoviesFromDirector(array, director);
  const scores = moviesDirector.reduce((a, b) => ({score: a.score + b.score}));
  const average = scores.score / moviesDirector.length;
  console.log('la suma ',average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
