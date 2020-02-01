var React = require("react");

class Edit  extends React.Component {
  render() {
          const url= '/workout/'+this.props.workout.id+'?_method=PUT';
//           '<form method="POST" action="/pokemon/'+pokemon.id+'?_method=put">'+
//   '<div class="pokemon-attribute">'+
//     'id: <input name="id" type="text" value="'+pokemon.id+'"/>'+
//     'name: <input name="name" type="text" value="'+pokemon.name+'"/>'+
//   '</div>'+
// '</form>';
    return (
      <html>
        <head/>
            <title>Edit workout!</title>
        <body>
            <h1>Hi {this.props.workout.name}, wana edit the current swim work out? Do it here!</h1>
            <form method="POST" action={url}>
                <p>
                    <input type="text" name="userId" hidden value={this.props.workout.user_id}/>
                    <input type="text" name="userId" hidden value={this.props.workout.id}/>
                </p>
                <p>
                    Previously chosen stroke is {this.props.workout.stroke_type} and the distance and duration are pre-filled according to previous choice as below. Do you want to change?
                </p>
                <p>
                Stroke:
                <select name="stroke">
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