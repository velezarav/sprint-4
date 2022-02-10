const movies = require("./data");

function getAllDirectors(array) {
  let directors = array.map(film => film.director); 
  return directors;
}

function getMoviesFromDirector(array, director) {
  const moviesDirector = array.filter(movie => movie.director === director);
  return moviesDirector;
}

function moviesAverageOfDirector(array, director) { 
  const moviesDirector = getMoviesFromDirector(array, director); 
  const scores = moviesDirector.reduce((a, b) => ({score: a.score + b.score})); 
  const average = parseFloat((scores.score / moviesDirector.length).toFixed(2)); 
  return average; 
}

function orderAlphabetically(array) {
  const nameFilms = array.map(film => film.title);
  const orderedNames = nameFilms.sort()
  return orderedNames.slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const titleAndYear = array.map(film => {return {title: film.title, year: film.year}});
  const orderedList = titleAndYear.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 );
  return orderedList;
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
