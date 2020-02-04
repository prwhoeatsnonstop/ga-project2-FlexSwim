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
  <div class="container" align="center">

    <header class="jumbotron my-4">
      <h1 class="display-3">Hi {this.props.username}!</h1>
      <p class="lead">Your swimming workout list looks empty, add workout?</p>
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
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
  </thead>
  <tbody>
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