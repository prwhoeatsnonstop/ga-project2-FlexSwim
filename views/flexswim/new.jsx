var React = require("react");
var DefaultLayout = require('../layouts/formlayout');
class New extends React.Component {
  render() {
    return (
      <html>
        <head/>
            <title>Create a new workout!</title>
        <body>
        <DefaultLayout title={this.props.title}>

        <div class="container" align="center">
            <header class="jumbotron my-4">
      <h1 class="display-3">Hi {this.props.username}!</h1>
      <p class="lead">You may add new swim workout in the below form.</p>
    </header>
            <form class="form-horizontal" role="form" method="POST" action="/workout">
                <h2> Add </h2>
                     <input type="text" name="userId" hidden value={this.props.user_id}/>
                <div class="form-group">
                    <label for="country" class="col-sm-3 control-label">Stroke Type</label>
                    <div class="col-sm-9">
                        <select name="stroke" id="country" class="form-control">
                            <option value="freestyle">Freestyle</option>
                            <option value="breastroke">Breastroke</option>
                            <option value="backstroke">Backstroke</option>
                            <option value="butterfly">Butterfly</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="distance" class="col-sm-3 control-label">Distance (in metres)</label>
                    <div class="col-sm-9">
                        <input type="number" name="distance" placeholder="Eg: 50" class="form-control" required autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="duration" class="col-sm-3 control-label">Duration (in minutes)</label>
                    <div class="col-sm-9">
                        <input type="number" name="duration" placeholder="Eg: 5" class="form-control" required autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-2 col-sm-offset-3">
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>
            </form>
        </div>
                      </DefaultLayout>
        </body>

      </html>
    );
  }
}

module.exports = New;