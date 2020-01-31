var React = require("react");

class Show extends React.Component {
  render() {
            let d = new Date();
            let newWorkOutArray = this.props.newWorkOut;
            let isFalse = (newWorkOutArray) => {
                    return newWorkOutArray.done === false;
                }
            let message = (newWorkOutArray) => {
                return <option> The current swim stroke is {newWorkOutArray.stroke}, {newWorkOut.distance} in metre, {newWorkOutArray.duration} in minutes, created on {d} </option>;
                }
                console.log(newWorkOutArray)
            let list = newWorkOutArray.filter(isFalse).map(message);
    return (
      <html>
        <head />
            <title>
            Show personal workouts
            </title>
        <body>
            <h3>Completed personal workouts</h3>
            <p></p>
            <p></p>
            <p></p>
            <h3>Personal workouts that are yet to be completed</h3>
                <div>
                        <select name="personal_stroke_id">
                        {list}
                        </select>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            <h3>Wana make a new personal swimming workout? Click the below link</h3>
                <a href='/new'>Create new swimstroke</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Wana edit a personal swimming workout? Click the below link</h3>
                <a href='/edit'>Edit this workout</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Wana delete this personal swimming workout? Click the below link</h3>
                <a href='/delete'>Delete this workout</a>
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

module.exports = Show;