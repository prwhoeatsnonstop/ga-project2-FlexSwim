var React = require("react");

class Index extends React.Component {
  render() {
    //TODO: find a way to do {this.props.allTweedr[i].name} to print out the user's name because {this.props.allTweedr[0].name prints out the first name from users' table}
    return (
      <html>
        <head />
        <title>
            Index - Home page
        </title>
        <body>
            <h3>Hello <span style={{ color: "#DB4067", fontWeight: "lighter"}}>{this.props.selectedUser}</span></h3>
            <p></p>
            <p></p>
            <p></p>
            <h3>Wana make a tweet? Click the below link</h3>
                <a href='/new'>Create new tweet</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>To see all your previous tweets, click here</h3>
                <a href='/'>Show all tweets</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>To select a user to follow, click here (This link is not working yet, TODO)</h3>
                <a href='/addfollower'>Choose user</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Tired of tweeting? Logout from below</h3>
            <a href="/logout">Log out</a>
        </body>
      </html>
    );
  }
}

module.exports = Index;