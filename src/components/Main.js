const React = require('react');
require('normalize.css');
require('styles/App.css');

const MovieList = require('./movie/movie-list');
const Menu = require('./util/menu');
let myMovieList=['Terminator', 'Star Wars'];

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <div className='title'>Movie Database</div>
        <Menu/>
        <MovieList movies={myMovieList}/>
      </div>
    );
  }
}

//var routes = (
//  <Route handler={App} path={window.baseRouterPath}>
//    <Route name='moviesList' path='moviesList' handler={MovieList}/>
//    <Route name='appointmentEvent' path='appointmentEvent' handler={AppointmentEvent}/>
//    <Route name='createTimeSlot' path='createTimeSlot' handler={CreateTimeSlot}/>
//    <Route name='timeSlots' path='timeSlots' handler={TimeSlots}/>
//    <Route name='locationsList' path='locationsList' handler={LocationsList}/>
//    <Route name='location' path='location' handler={Location}/>
//    <Route name='appointmentTypesList' path='appointmentTypesList' handler={AppointmentTypesList}/>
//    <Route name='appointmentType' path='appointmentType' handler={AppointmentType}/>
//    <Route name='groupList' path='groupList' handler={GroupList}/>
//    <Route name='attendeesList' path='attendeesList' handler={AttendeesList}/>
//    <Route name='group' path='group' handler={Group}/>
//    <NotFoundRoute handler={NotFound}/>
//  </Route>
//);

AppComponent.defaultProps = {
};

module.exports = AppComponent;
