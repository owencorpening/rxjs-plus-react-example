var alt = require('../alt');

class MovieActions {
  updateMovies(movies) {
    return movies;
  }
}

module.exports = alt.createActions(MovieActions);
