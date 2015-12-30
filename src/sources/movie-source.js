const _ = require('lodash');

var MovieSource = {
//*eslint-disable no-alert, no-console */
  // Get all movies
  fetchMovies: function () {
    return localStorage.movies;
  },

  //creates a single movie
  createMovie: function (movie) {
    let movies = [];
    if (localStorage.movies && JSON.parse(localStorage.movies).length > 0) {
      movies = JSON.parse(localStorage.movies);
      if (_.some(movies, movie)) {
        // duplicate
        return;
      }
    }
    movies.push(movie);
    return localStorage.movies = JSON.stringify(movies);
  },

  //updates a single movie by id
  updateMovie: function (id, movie) {
    let index = _.indexOf(JSON.parse(localStorage.movies), _.find(localStorage.movies, {id: id}));
    return localStorage.movies.splice(index, 1, movie);
  },

  //Deletes a single Movie by Id
  deleteMovie: function (id) {
    let movieArray = JSON.parse(localStorage.movies);
    for(var i=0; i<movieArray.length; i++) {
      if (movieArray[i].key === id.key) {
        movieArray.splice(i, 1);
        localStorage.movies = JSON.stringify(movieArray);
      }
    }
    return;
  },

  //Gets a single movie by Id
  fetchMovie: function (id) {
    return _.find(JSON.parse(localStorage.movies), {id: id});
  }
};

module.exports = MovieSource;
