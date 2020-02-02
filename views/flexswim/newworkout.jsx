var React = require("react");
const moment = require('moment');
var DefaultLayout = require('./layouts/default');
class NewWorkout extends React.Component {
  render() {
    return (
      <html>
        <head />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            <meta charSet="utf-8" />
            <title>
            Added New WorkOut Page
            </title>
        <body>
            <h3>Hi {this.props.name}, below are your newly added personal workouts
            </h3>
                <div>
                    <p>Stroke type: {this.props.workout.stroke_type}</p>
                    <p>Distance: {this.props.workout.distance} metres</p>
                    <p>Duration: {this.props.workout.duration} minutes</p>
                </div>
            <h3>Wana add another personal swimming workout? Click the below link</h3>
                <a className='btn btn-danger' href='/workout/new' role='button' >
                  Add a new swimming workout</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Wana edit a personal swimming workout? Click the below link</h3>
                <a className='btn btn-danger' href='/workout/:id/edit' role='button' >
                Edit a swimming workout</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Wana delete this personal swimming workout? Click the below link</h3>
                <a className='btn btn-danger' href='/workout/:id' role='button' >
                Delete a workout</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Return to home to view all workouts</h3>
                <a href='/'>Home</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Tired of planning a workout? Logout from below</h3>
            <a href="/logout">Log out</a>
        </body>
      </html>
    );
  }
}

module.exports = NewWorkout;

                    // try to fix this <p>Created on: moment({this.props.workout.date_created}).format('LLLL');</p>