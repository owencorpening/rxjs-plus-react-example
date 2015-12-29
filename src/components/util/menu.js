const React = require('react');

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='add-movie-div'>
        <button className='add-movie-button'>Add Movie</button>
      </div>
    );
  }
}

module.exports = Menu;
