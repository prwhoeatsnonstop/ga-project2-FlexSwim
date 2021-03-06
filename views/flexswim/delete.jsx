var React = require("react");
var DefaultLayout = require('../layouts/default');
const moment = require('moment');

  class Delete extends React.Component {
    render() {
      const deleteUrl= '/workout/'+this.props.workout.id+'?_method=DELETE';
    return (
        <html>
        <head />
        <title>
            Individual Workout
        </title>
        <body>
        <DefaultLayout title={this.props.title}>
            <h4><a href='/' className="text-body">Hi {this.props.name}</a>, </h4>
            <p>this was your previous chosen stroke, {this.props.workout.stroke_type}</p>
            <form method="POST" action={deleteUrl}>
                <input type="hidden" name="workoutID" value={this.props.workout.id}/>
                <input type="hidden" name="strokeID" value={this.props.workout.stroke_type}/>
                <input type="hidden" name="distanceID" value={this.props.workout.distance}/>
                <input type="hidden" name="durationID" value={this.props.workout.duration}/>

                <input type="submit" className="btn btn-danger" value="Delete this workout"/>
            </form>
            <h3>Return to home if dun wana delete</h3>
                <a href='/'>Home</a>
                </DefaultLayout>
        </body>
        </html>
                )
  }
}

module.exports = Delete;