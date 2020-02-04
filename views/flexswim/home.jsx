var React = require("react");
var DefaultLayout = require('../layouts/formlayout');
class Home  extends React.Component {
  render() {
        let Capitalize = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1) };
    return (
      <html>
        <head/>
            <title>Home</title>
        <body>
        <DefaultLayout title={this.props.title}>

        <div class="container" align="center">
                    <header class="jumbotron my-4">
      <h1 class="display-3">Hi {this.props.name}!</h1>
      <p class="lead">Welcome to your personal swimming workout tracker app!</p>
    </header>
        </div>

          <div class="container" align="center">
<div class="row text-center">

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/500x325" alt="image"/>
          <div class="card-body">
            <h4 class="card-title">Card Title</h4>
            <p class="card-text">Total swim workout distance and duration</p>
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
            <p class="card-text">Choose randomize swim workout plans.</p>
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
            <p class="card-text">Tips on relieving muscle cramps during your swim workout.</p>
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
            <p class="card-text">Find a nearby swimming pool.</p>
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

module.exports = Home ;