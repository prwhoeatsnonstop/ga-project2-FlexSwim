var React = require('react');

var sha256 = require('js-sha256');
const SALT = "saltprotector";

class Login extends React.Component {
  render() {
    return (
      <html>
      <head>
          <title>Login page</title>
      </head>
        <body>
          <div>
            <h2>Login</h2>
            <form action="/login" method="POST">
                <p>
                    Name <input name="name" placeholder="name" required/>
                </p>
                <p>
                    Password <input type="password" name="password" placeholder="password"required/>
                </p>

                <p>
                    <input type="submit" value="Login"/>
                </p>
            </form>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;