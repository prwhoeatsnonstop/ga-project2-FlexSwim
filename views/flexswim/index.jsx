var React = require("react");
const moment = require('moment');
var DefaultLayout = require('../layouts/default');
class Index extends React.Component {
  render() {
        let Capitalize = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1) };
        let filteredfalse = this.props.show.filter(show => {
            return show.done === false;
        });

        let info = filteredfalse.map(show => {

        let time = moment(show.date_created).format('MMMM Do YYYY, h:mm:ss a');
        let newtime = moment(show.date_updated).format('MMMM Do YYYY, h:mm:ss a');
            const editUrl= '/workout/'+show.id+'/edit';
            const deleteUrl= '/workout/'+show.id+'?_method=DELETE';
            const doneUrl= '/workout/'+show.id+'/done?_method=PUT';
        return (<tr><td>{Capitalize(show.stroke_type)}</td>
                <td>{show.distance}</td>
                <td>{show.duration}</td>
                <td>{time}</td>
                <td>{newtime}</td>
                <td><a href={editUrl} class="btn btn-info">Edit</a></td>
                <td><form method="POST" action={deleteUrl}>
                <input type="submit" className="btn btn-danger" value="Delete "/>
                </form></td>
                <td><span style={{color: 'black', fontWeight: 'bold'}}>Incomplete</span></td>
                <td><form method="POST" action={doneUrl}>
                <input type="submit" className="btn btn-primary" value="Done"/>
                </form></td>
                </tr>)
    });


// ┌─┐┬┬ ┌┬┐┌─┐┬─┐  ┌─┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐┌┬┐  ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
// ├┤ ││  │ ├┤ ├┬┘  │  │ ││││├─┘│  ├┤  │ ├┤  ││  ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// └  ┴┴─┘┴ └─┘┴└─  └─┘└─┘┴ ┴┴  ┴─┘└─┘ ┴ └─┘─┴┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘


        let filteredtrue = this.props.show.filter(show => {
            return show.done === true;
        });

        let completed = filteredtrue.map(show => {

            let time = moment(show.date_created).format('MMMM Do YYYY, h:mm:ss a');
            let newtime = moment(show.date_completed).format('MMMM Do YYYY, h:mm:ss a');
        return (<tr><td>{Capitalize(show.stroke_type)}</td>
                <td>{show.distance}</td>
                <td>{show.duration}</td>
                <td>{time}</td>
                <td>{newtime}</td>
                <td><span style={{color: '#006AD7', fontWeight: 'bold'}}>Completed</span></td>
                </tr>



                )
    });
    return (
      <html>
        <head />
            <title>
            Show All

            </title>
        <body>
        <DefaultLayout title={this.props.title}>
  <div class="container" align="center">

    <header class="jumbotron my-4">
      <h1 class="display-3">Hi {this.props.username}!</h1>
      <p class="lead">Your workouts are as below</p>
      <a href="/workout/new" class="btn btn-primary btn-lg">Add more workout?</a>
    </header>

    <div className="table" style={{textAlign: 'center'}}>
                <table class="table table-hover table-bordered">
  <thead>
  <tr>
  <td colspan="9"><span style={{color: '#CC2047', fontWeight: 'bold'}}>Incomplete Swim Workouts</span></td>
  </tr>
    <tr>
      <th scope="col">Strokes</th>
      <th scope="col">Distance (metre)</th>
      <th scope="col">Duration (minute)</th>
      <th scope="col">Date created</th>
      <th scope="col">Date updated</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      <th scope="col">Status</th>
      <th scope="col">Mark as done</th>
    </tr>
  </thead>
  <tbody>
    {info}
  </tbody>
</table>
                </div>

    <div className="table" style={{textAlign: 'center'}}>

                <table class="table table-hover table-bordered">
  <thead>
    <tr>
  <td colspan="9"><span style={{color: '#006AD7', fontWeight: 'bold'}}>Completed Swim Workouts</span></td>
  </tr>
    <tr>
      <th scope="col">Strokes</th>
      <th scope="col">Distance (metre)</th>
      <th scope="col">Duration (minute)</th>
      <th scope="col">Date created</th>
      <th scope="col">Date completed</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {completed}
  </tbody>
</table>
                </div>
  </div>

            </DefaultLayout>
        </body>
      </html>
    );
  }
}

module.exports = Index;