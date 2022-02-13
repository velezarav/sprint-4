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
  // console.log('estas son las movies por director ', moviesDirector)
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
function moviesAverageByCategory(array, genre) {
  const moviesCategory = array.filter(movie => movie.genre.includes(genre));
  const moviesCategoryWithScore = moviesCategory.filter(movie => movie.score !== '');
  const scores = moviesCategoryWithScore.reduce((a, b) => ({score: a.score + b.score})); 
  const average = parseFloat((scores.score / moviesCategoryWithScore.length).toFixed(2)); 
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  // const newArray = array.map(film => film);
  const newArray = Object.assign([], array);
  for (let movie of newArray){
    if (movie.duration.includes('h') && movie.duration.includes('min')) {
      let time = movie.duration.split(' ');
      let hours = time[0].slice(0, -1);
      let minutes = time[1].slice(0, -3);
      movie.duration = (parseInt(hours) * 60) + parseInt(minutes);
    } else if (movie.duration.includes('h')) {
      let minutes = movie.duration.slice(0, -1) * 60;
      movie.duration = minutes;
    } else {
      let minutes = movie.duration.slice(0, -3);
      movie.duration = minutes;
    }
  }
  console.log(newArray)
  console.log('ESTEES',array)
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const moviesOfYear = array.filter(film => film.year === year);
  const filmsOrdered = moviesOfYear.sort((a, b) => (a.score > b.score) ? 1 : -1);
  const bestFilmOfYear = [filmsOrdered[filmsOrdered.length -1]];
  return bestFilmOfYear;
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
