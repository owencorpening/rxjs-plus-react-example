const React = require('react');

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.setValue = this.setValue.bind(this);
    this.createMovie = this.createMovie.bind(this);
  }

  render() {
    return (
      <table className='movie'>
        <thead>
          <tr>
            <th>Title: </th>
            <th>Year: </th>
            <th>Genre: </th>
            <th>Actors: </th>
            <th>Rating: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type='text' name='title' onChange={this.setValue}/></td>
            <td><input type='text' name='year' onChange={this.setValue}/></td>
            <td><input type='text' name='genre' onChange={this.setValue}/></td>
            <td><input type='text' name='actors' onChange={this.setValue}/></td>
            <td><input type='text' name='rating' onChange={this.setValue}/></td>
          </tr>
          <tr>
            <td><button className='add-movie-button' onClick={this.createMovie}>Add Movie</button></td>
          </tr>
        </tbody>
      </table>
    );
  }

  setValue(event) {
    this[event.target.name] = event.target.value;
  }

  createMovie() {
    var movie = {};
    movie.key = new Date().getUTCMilliseconds();
    movie.title = this.title;
    movie.year = this.year;
    movie.genre = this.genre;
    movie.actors = this.actors;
    movie.rating = this.rating;
    this.props.createMovieCallback(movie);
    this.props.restoreListingModeCallback();
  }

}

module.exports = Movie;
