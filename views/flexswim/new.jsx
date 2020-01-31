var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head/>
            <title>Create a new workout!</title>
        <body>
            <h1>Hi {this.props.username}, wana add a new Swim Work Out? Do it here!</h1>
            <form method="POST" action="/new">
                <p>
                    <input type="text" name="userId" hidden value={this.props.user_id}/>
                </p>
                <p>
                Stroke:
                <select name="stroke">
                    <option value="freestyle">Freestyle</option>
                    <option value="breastroke">Breastroke</option>
                    <option value="backstroke">Backstroke</option>
                    <option value="butterfly">Butterfly</option>
                </select>
                </p>
                <p>
                    Distance (in metres) : <input name="distance" placeholder="Eg: 50" required/>
                </p>
                <p>
                    Duration (in minutes) : <input name="duration" placeholder="Eg: 5" required/>
                </p>
                <input type="submit" value="Submit"/>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = New;