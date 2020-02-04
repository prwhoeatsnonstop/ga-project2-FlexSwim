var React = require("react");
var DefaultLayout = require('../layouts/layoutforlogin');

class DuplicateUser extends React.Component {
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

    <form action="/register" method="POST">
      <input type="text" id="login" className="fadeIn second" name="name" placeholder="username" required/>
      <span class="help-block" style={{color: 'red', fontWeight: 'bold'}}>Username taken! Create new one! </span>
      <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" required/>
      <input type="submit" className="fadeIn fourth" value="Register"/>
    </form>


  </div>
</div>
          </DefaultLayout>
      </html>
    );
  }
}

module.exports = DuplicateUser;