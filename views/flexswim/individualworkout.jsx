var React = require("react");
const moment = require('moment');
    class IndividualWorkout extends React.Component {
    render() {
      const deleteURL= '/workout/'+this.props.workout.id+'?_method=DELETE'
      const userLink = '/users';
      //how to write this?
    return (
        <html>
        <head />
        <title>
            Individual Workout
        </title>
        <body>
            <h4><a href='/' className="text-body">{this.props.name}</a> wrote:</h4>
            <p>this is {this.props.workout.stroke_type}</p>
            <p className="text-muted"><small>{this.props.workout.date_formatted}</small></p>
            <form action={deleteURL} method="POST">
                <input type="hidden" name="workoutID" value={this.props.workout.id}/>
                <input type="hidden" name="strokeID" value={this.props.workout.stroke_type}/>
                <input type="hidden" name="distanceID" value={this.props.workout.distance}/>
                <input type="hidden" name="durationID" value={this.props.workout.duration}/>

                <input type="submit" className="btn btn-danger" value="Delete this workout"/>
            </form>
            <h3>Return to home if dun wana delete</h3>
                <a href='/'>Home</a>
        </body>
        </html>
                )
  }
}

module.exports = IndividualWorkout;