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
            <h3>Hello <span style={{ color: "#DB4067", fontWeight: "lighter"}}>{this.props.username}</span></h3>
            <p></p>
            <p></p>
            <p></p>
            <h3>Looks like you don't have any workouts yet. Start by adding a new workout. </h3>
            <h3>Personalise a swimming workout plan from here.</h3>
            <a className='btn btn-danger' href='/workout/new' role='button' >
                  Add a new swimming workout</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Feeling like editing your swim workout plan? Click the below link</h3>
            <a className='btn btn-danger' href='/workout/:id/edit' role='button' >
                Edit a swimming workout</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>To see all your previous workouts, click here</h3>
            <a className='btn btn-danger' href='/' role='button' >
                  Show all swimming workout</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Tired of working out? Logout from below</h3>
            <a className='btn btn-danger' href='/logout' role='button' >
                  Log Out</a>
                  </DefaultLayout>
        </body>
      </html>
    );
  }
}

module.exports = Index;