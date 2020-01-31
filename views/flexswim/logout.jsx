var React = require("react");

class Logout extends React.Component {
  render() {
    return (
      <html>
        <head />
        <title>
            Logout
        </title>
        <body>
            <h3>You have successfully log out from this account.</h3>
            <p></p>
            <p></p>
            <h3>To see your previous swim workouts again, login from here</h3>
            <a href="/login">Login</a>
            <p></p><p></p>
            <h3>Considering a 2nd account? You can register a new one from here</h3>
            <a href="/register">Register</a>
            <p></p>
        </body>
      </html>
    );
  }
}

module.exports = Logout;