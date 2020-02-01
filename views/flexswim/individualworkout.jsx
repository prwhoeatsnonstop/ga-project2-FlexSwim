var React = require("react");

class IndividualWorkOut extends React.Component {
    render() {
      const deleteURL= '/workout+{this.props.workout.id}+?_method=DELETE';
      const userLink = '/users/{this.props.workout.user_id}';
        return (
            <div>
            <h4><a href={userLink} className="text-body">{this.props.workout.name}</a> wrote:</h4>
            <p>{this.props.workout.stroke_type}</p>
            <p className="text-muted"><small>{this.props.message.date_formatted}</small></p>
            </div>
            <React.Fragment>
            <form action={deleteURL} method="POST">
                <input type="hidden" name="workOutId" value={this.props.workout.stroke_type}/>
                <input type="hidden" name="workOutId" value={this.props.workout.distance}/>
                <input type="hidden" name="workOutId" value={this.props.workout.duration}/>
                <input type="hidden" name="workOutId" value={this.props.workout.done}/>
                <input type="hidden" name="workOutId" value={this.props.workout.id}/>
                <input type="submit" className="btn btn-danger" value="Delete this message"/>
            </form>
            </React.Fragment>
                );
  }
}

module.exports = IndividualWorkOut;