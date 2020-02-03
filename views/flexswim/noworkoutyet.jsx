var React = require("react");
var DefaultLayout = require('../layouts/default');
class Index extends React.Component {
  render() {

    return (
      <html>
        <head />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
        <meta charSet="utf-8" />
        <title>
            Home - no work out yet
        </title>
        <body>
        <DefaultLayout title={this.props.title}>
  <div class="container">

    <header class="jumbotron my-4">
      <h1 class="display-3">Hi {this.props.username}!</h1>
      <p class="lead">Your workout list looks empty, add workout?</p>
      <a href="/workout/new" class="btn btn-primary btn-lg">Add workout?</a>
    </header>

    <div>
                <table class="table table-hover table-bordered ">
  <thead>
    <tr>
      <th scope="col">Strokes</th>
      <th scope="col">Distance (in metres)</th>
      <th scope="col">Duration (in minutes)</th>
      <th scope="col">Date created/updated</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      <th scope="col">Add more</th>

    </tr>
  </thead>
  <tbody>
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