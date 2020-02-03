var React = require("react");
var DefaultLayout = require('../layouts/formlayout');
class Home  extends React.Component {
  render() {
        let Capitalize = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1) };
    return (
      <html>
        <head/>
            <title>Edit workout!</title>
        <body>
        <DefaultLayout title={this.props.title}>

        <div class="container" align="center">
                    <header class="jumbotron my-4">
      <h1 class="display-3">Hi {this.props.name}!</h1>
      <p class="lead">Welcome to your personal swimming workout tracker app!</p>
    </header>
        </div>

                      </DefaultLayout>

        </body>
      </html>
    );
  }
}

module.exports = Home ;