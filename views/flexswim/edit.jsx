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

        <div className="container" align="center">
                    <header className="jumbotron my-4">
      <h1 className="display-3">Hi {this.props.username}!</h1>
      <p className="lead">You may add edit your swim workout in the below form.</p>
    </header>
            <form className="form-horizontal" role="form" method="POST" action={url}>
                <h2> Edit </h2>
                    <input type="text" name="userId" hidden value={this.props.workout.user_id}/>
                    <input type="text" name="workoutId" hidden value={this.props.workout.id}/>
                <div className="form-group">
                    <label for="country" className="col-sm-3 control-label">Stroke Type</label>
                    <div className="col-sm-9">
                        <select name="stroke" id="country" className="form-control">
                            <option value={this.props.workout.stroke_type}>{Capitalize(this.props.workout.stroke_type)}</option>
                            <option value="freestyle">Freestyle</option>
                            <option value="breastroke">Breastroke</option>
                            <option value="backstroke">Backstroke</option>
                            <option value="butterfly">Butterfly</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label for="distance" className="col-sm-3 control-label">Distance (in metres)</label>
                    <div className="col-sm-9">
                        <input type="number" name="distance" value={this.props.workout.distance}  className="form-control" required autofocus/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="duration" className="col-sm-3 control-label">Duration (in minutes)</label>
                    <div className="col-sm-9">
                        <input type="number" name="duration" value={this.props.workout.duration} className="form-control" required autofocus/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-2 col-sm-offset-3">
                        <button type="submit" className="btn btn-primary btn-block">Save</button>
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