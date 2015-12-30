var alt = require('../alt');
var MovieActions = require('../actions/movie-actions');

class MovieStore {
  constructor() {
    this.movies = [];

    this.errorMessage = null;

    this.bindListeners({
      handleCreateMovie: MovieActions.CREATE_MOVIE
    });
  }

  handleCreateMovie() {
    this.errorMessage = null;
    this.pending = true;
  }
}

module.exports = alt.createStore(MovieStore, 'MovieStore');
