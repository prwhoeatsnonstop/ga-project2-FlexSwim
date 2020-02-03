var React = require("react");
const moment = require('moment');
var DefaultLayout = require('../layouts/default');
class Index extends React.Component {
  render() {

    let info = this.props.show.map(show => {

        let time = moment(show.date_created).format('MMMM Do YYYY, h:mm:ss a');
        let newtime = moment(show.date_created).format('MMMM Do YYYY, h:mm:ss a');
            const editUrl= '/workout/'+show.id+'/edit';
            const deleteUrl= '/workout/'+show.id+'?_method=DELETE';
            const addUrl = 'workout/new';
        return (<tr><td>{show.stroke_type}</td>
                <td>{show.distance}</td>
                <td>{show.duration}</td>
                <td>{time}</td>
                <td>{newtime}</td>
                <td><a href={editUrl} class="btn btn-info">Edit</a></td>
                <td><form method="POST" action={deleteUrl}>
                <input type="hidden" name="workoutID" value={this.props.show.id}/>
                <input type="hidden" name="strokeID" value={this.props.show.stroke_type}/>
                <input type="hidden" name="distanceID" value={this.props.show.distance}/>
                <input type="hidden" name="durationID" value={this.props.show.duration}/>

                <input type="submit" className="btn btn-danger" value="Delete this workout"/>
            </form></td>
                <td><a href='/workout/new' class="btn btn-primary">Add</a></td>
                </tr>
                )
    })
    return (
      <html>
        <head />
            <title>
            Index Page
            </title>
        <body>
        <DefaultLayout title={this.props.title}>
  <div class="container">

    <header class="jumbotron my-4">
      <h1 class="display-3">Hi {this.props.username}!</h1>
      <p class="lead">Your workouts are as below</p>
      <a href="/workout/new" class="btn btn-primary btn-lg">Add more workout?</a>
    </header>

    <div>
                <table class="table table-hover table-bordered ">
  <thead>
    <tr>
      <th scope="col">Strokes</th>
      <th scope="col">Distance (in metres)</th>
      <th scope="col">Duration (in minutes)</th>
      <th scope="col">Date created</th>
      <th scope="col">Date updated</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      <th scope="col">Add more</th>

    </tr>
  </thead>
  <tbody>
    {info}
  </tbody>
</table>
                </div>

    <div class="row text-center">

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/500x325" alt="image"/>
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/500x325" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/500x325" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/500x325" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

    </div>

  </div>

            </DefaultLayout>
        </body>
      </html>
    );
  }
}

module.exports = Index;