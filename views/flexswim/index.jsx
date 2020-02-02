var React = require("react");
const moment = require('moment');
class Index extends React.Component {
  render() {
    let info = this.props.show.map(show => {

        let time = moment(show.date_created).format('MMMM Do YYYY, h:mm:ss a');
            const editUrl= '/workout/'+show.id+'/edit';
            const deleteUrl= '/workout/'+show.id+'';
        return (<tr><td>{show.stroke_type}</td>
                <td>{show.distance}</td>
                <td>{show.duration}</td>
                <td>{time}</td>
                <td><a href={editUrl}>Edit</a></td>
                <td><a href={deleteUrl}>Delete</a></td>
                </tr>
                )
    })
    return (
      <html>
        <head />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            <meta charSet="utf-8" />
            <title>
            Index Page
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
                        <th>Date created/updated</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {info}
                </table>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            <h3>Wana add more personal swimming workouts? Click the below link</h3>
                <a className='btn btn-danger' href='/workout/new' role='button' >
                  Add a new swimming workout</a>
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

module.exports = Index;