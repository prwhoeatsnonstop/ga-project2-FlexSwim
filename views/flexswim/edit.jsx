var React = require("react");
var DefaultLayout = require('../layouts/formlayout');
class Edit  extends React.Component {
  render() {
        let Capitalize = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1) };
          const url= '/workout/'+this.props.id+'?_method=PUT';
    return (
      <html>
        <head/>
            <title>Edit workout!</title>
        <body>
        <DefaultLayout title={this.props.title}>

        <div class="container" align="center">
                    <header class="jumbotron my-4">
      <h1 class="display-3">Hi {this.props.username}!</h1>
      <p class="lead">You may add edit your swim workout in the below form.</p>
    </header>
            <form className="form-horizontal" role="form" method="POST" action={url}>
                <h2> Edit </h2>
                    <input type="text" name="userId" hidden value={this.props.workout.user_id}/>
                    <input type="text" name="workoutId" hidden value={this.props.workout.id}/>
                <div class="form-group">
                    <label for="country" class="col-sm-3 control-label">Stroke Type</label>
                    <div class="col-sm-9">
                        <select name="stroke" id="country" class="form-control">
                            <option value={this.props.workout.stroke_type}>{Capitalize(this.props.workout.stroke_type)}</option>
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
                        <input type="number" name="distance" value={this.props.workout.distance}  class="form-control" required autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="duration" class="col-sm-3 control-label">Duration (in minutes)</label>
                    <div class="col-sm-9">
                        <input type="number" name="duration" value={this.props.workout.duration} class="form-control" required autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-2 col-sm-offset-3">
                        <button type="submit" class="btn btn-primary btn-block">Save</button>
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

module.exports = Edit ;