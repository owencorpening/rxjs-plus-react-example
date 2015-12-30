const React = require('react');
require('normalize.css');
require('styles/App.css');

const MovieStore = require('../stores/movie-store');
const MovieActions = require('../actions/movie-actions');
const MovieList = require('./movie/movie-list');
const Movie = require('./movie/movie');
const Menu = require('./util/menu');
let myMovieList=['Terminator', 'Star Wars'];

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: true,
      refresh: true,
      mode: 'create' // TODO: edit and view modes, constants file
    }
    this.changeToAddMovieMode = this.changeToAddMovieMode.bind(this);
    this.changeToListingMode = this.changeToListingMode.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    MovieStore.listen(this.onChange);
    MovieActions.fetchMovies();
  }

  componentWillUnmount() {
    MovieStore.unlisten(this.onChange);
  }

  onChange(state) {
    console.log(state); // eslint-disable-line no-console
  }

  render() {
    // display different components if we are viewing the list or creating a movie
    let payload;
    if (localStorage.movies) {
      myMovieList = JSON.parse(localStorage.movies); // oh well can't get Alt to work completely ....
    }
    if (this.state.listing) {
      payload = <div>
          <Menu addMovieCallback = {this.changeToAddMovieMode} />
          <MovieList movies={myMovieList} deleteMovieCallback={this.deleteMovie}/>
        </div>
    }
    else {
      payload = <div>
          <Movie
            mode={this.state.mode}
            createMovieCallback={this.createMovie}
            restoreListingModeCallback={this.changeToListingMode}
          />
        </div>
    }
    return (
      <div className='index'>
        <div className='title'>Movie Database</div>
        {payload}
      </div>
    );
  }

  changeToAddMovieMode() {
    this.setState({listing: false});
  }

  changeToListingMode() {
    this.setState({listing: true});
  }

  createMovie(movie) {
    MovieActions.createMovie(movie);
  }

  deleteMovie(movie) {
    MovieActions.deleteMovie(movie);
    this.setState({refresh: ! this.state.refresh});
  }
}

AppComponent.defaultProps = {
};

module.exports = AppComponent;
