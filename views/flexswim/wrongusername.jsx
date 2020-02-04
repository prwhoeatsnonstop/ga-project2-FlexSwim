var React = require("react");
var DefaultLayout = require('../layouts/layoutforlogin');

class WrongUser extends React.Component {
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
      <img src="img/user.png" id="icon" alt="User Icon"/>
    </div>

    <form action="/login" method="POST">
      <input type="text" id="login" className="fadeIn second" name="name" placeholder="username" required/>
            <div class="help-block" style={{color: 'red', fontWeight: 'bold'}}>Invalid Username!</div>
      <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" required/>

      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

    <div id="formFooter">
      <a className="underlineHover" href="/register">Don't have an account? Register here</a>
    </div>

  </div>
</div>
          </DefaultLayout>
      </html>
    );
  }
}

module.exports = WrongUser;