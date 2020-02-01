var React = require("react");
const moment = require('moment');
class Show extends React.Component {
  render() {
    let info = this.props.show.map(show => {

        let time = moment(show.date_created).format('MMMM Do YYYY, h:mm:ss a');

        return (<tr><td>{show.stroke_type}</td>
                <td>{show.distance}</td>
                <td>{show.duration}</td>
                <td>{time}</td></tr>
                )
    })
    return (
      <html>
        <head />
            <title>
            Show personal workouts
            </title>
        <body>
            <h3>Showing {this.props.username}'s personal workouts</h3>
            <p></p>
            <p></p>
            <p></p>
            <h3>Hi {this.props.username}, below are your uncompleted personal workouts
            </h3>
                <div>
                <table>
                    <tr>
                        <th>Strokes</th>
                        <th>Distance</th>
                        <th>Duration</th>
                        <th>Date created</th>
                    </tr>
                    {info}
                </table>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            <h3>Wana make a new personal swimming workout? Click the below link</h3>
                <a href='/workout/new'>Create new swimstroke</a>
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
                <a href='/workout/:id'>Delete this workout</a>
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