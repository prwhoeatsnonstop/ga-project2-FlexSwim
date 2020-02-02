var React = require("react");
var DefaultLayout = require('../layouts/default');
class Edit  extends React.Component {
  render() {
          const url= '/workout/'+this.props.id+'?_method=PUT';
    return (
      <html>
        <head/>
            <title>Edit workout!</title>
        <body>
            <h1>Hi {this.props.workout.name}, wana edit the current swim work out? Do it here!</h1>
            <form method="POST" action={url}>
                <p>
                    <input type="text" name="userId" hidden value={this.props.workout.user_id}/>
                    <input type="text" name="workoutId" hidden value={this.props.workout.id}/>
                </p>
                <p>
                    Previously chosen stroke is {this.props.workout.stroke_type} and the distance is {this.props.workout.distance} metres and duration is {this.props.workout.duration} minutes are pre-filled according to previous choice as below. Do you want to change?
                </p>
                <p>
                    For stroke type, not able to pre-populate data with your previous choice. Refer to above statement to recall what you previously chose as stroke. In addition, please select once more underneath to ENSURE that you have updated to the correct stroke.
                </p>
                <p>
                Stroke:
                <select name="stroke" required>
                    <option value={this.props.workout.stroke_type}>{this.props.workout.stroke_type}</option>
                    <option value="freestyle">Freestyle</option>
                    <option value="breastroke">Breastroke</option>
                    <option value="backstroke">Backstroke</option>
                    <option value="butterfly">Butterfly</option>
                </select>
                </p>
                <p>
                    Distance (in metres) : <input name="distance" value={this.props.workout.distance} required/>
                </p>
                <p>
                    Duration (in minutes) : <input name="duration" value={this.props.workout.duration} required/>
                </p>
                <input type="submit" value="Submit"/>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Edit ;