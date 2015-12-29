const React = require('react');

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='movie-list'>
        <ul>
          {this.props.movies.map(function(movie) {
            return <li>{movie}</li>;
          })}
        </ul>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

module.exports = MovieList;
