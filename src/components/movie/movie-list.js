const React = require('react');

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var that = this;
    return (
      <div className='movie-list'>
        <table className='movie-listing'>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Year</th>
              <th>Actors</th>
              <th>Genre</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map(function(movie) {
              return <tr>
                <td>
                  <button
                    className='delete-movie-button'
                    onClick={that.props.deleteMovieCallback.bind(that, movie)}>
                    Delete
                  </button>
                </td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.actors}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

module.exports = MovieList;
