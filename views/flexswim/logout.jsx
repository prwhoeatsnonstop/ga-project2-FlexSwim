var React = require("react");
var DefaultLayout = require('../layouts/layoutforlogin');

class Logout extends React.Component {
  render() {
    return (
      <html>
        <head />
        <title>
            FlexSwim
        </title>
            <DefaultLayout title={this.props.title}>
            <h1>{this.props.title}</h1>
<div className="wrapper fadeInDown">
  <div id="formContent">
    <div className="fadeIn first">
        <h3>You've successfully logout!</h3>
      <img src="img/seeyousoon.jpg" alt="User Icon" width="200" height="100"/>
      <h3>But if you change your mind, you can always login from below 🏊</h3>
    </div>

    <form action="/login" method="POST">
      <input type="text" id="login" className="fadeIn second" name="name" placeholder="username" required/>
      <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" required/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

    <div id="formFooter">
      <a className="underlineHover" href="/register">Register For Additional New Account</a>
    </div>

  </div>
</div>
          </DefaultLayout>
      </html>
    );
  }
}

module.exports = Logout;