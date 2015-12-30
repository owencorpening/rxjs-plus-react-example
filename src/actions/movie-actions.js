var alt = require('../alt');
var MovieSource = require('../sources/movie-source');

class MovieActions {
  storeUpdateMovies(movies, fullUpdate) {
    return({movies:movies, fullUpdate:fullUpdate});
  }

  storeUpdateMovie(movie) {
    return(movie);
  }

  storeDeleteMovie(id) {
    return(id);
  }

  fetchMovies() {
    setTimeout(function(){
      return MovieSource.fetchMovies();
    }, 0);

  }

  createMovie(movie) {
    MovieSource.createMovie(movie);
    return movie;
  }

  updateMovie(id, movie) {
    MovieSource.updateMovie(id, movie);
  }

  deleteMovie(id) {
    MovieSource.deleteMovie(id);
  }

  fetchMovie(id) {
    MovieSource.fetchMovie(id).then((movie) => {
      this.actions.storeUpdateMovie(movie);
    }).catch((errorMessage) => {
      this.actions.fetchMovieFailed(errorMessage);
    });
  }

}

module.exports = alt.createActions(MovieActions);
