var React = require("react");

class Landing extends React.Component {
  render() {
    return (
      <html>
        <head />
        <title>
            FlexSwim
        </title>
        <body>
            <h3>Hello, wana start swimming? Register for an account now</h3>
            <a href="/register">Register</a>
            <p></p>
            <p></p>
            <h3>Have an account with FlexSwim? Login from here</h3>
            <a href="/login">Login</a>
        </body>
      </html>
    );
  }
}

module.exports = Landing;