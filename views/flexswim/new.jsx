var React = require("react");
var DefaultLayout = require('../layouts/default');
class New extends React.Component {
  render() {
    return (
      <html>
        <head/>
            <title>Create a new workout!</title>
        <body>
        <DefaultLayout title={this.props.title}>

        <div class="container">
        <h1>Hi {this.props.username}, wana add a new Swim Work Out?</h1>
            <form class="form-horizontal" role="form" method="POST" action="/workout">
                <h2> Swim Work Out Form</h2>

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
                    <label for="distance" class="col-sm-3 control-label">Distance (NUMBERS ONLY, in metres)</label>
                    <div class="col-sm-9">
                        <input type="number" name="distance" placeholder="Eg: 50" class="form-control" required autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="duration" class="col-sm-3 control-label">Duration (NUMBERS ONLY, in minutes)</label>
                    <div class="col-sm-9">
                        <input type="number" name="duration" placeholder="Eg: 5" class="form-control" required autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                        <button type="submit" class="btn btn-primary btn-block">Add</button>
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