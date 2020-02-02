var React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/default.css"/>
            <link rel="icon" href="img/swim.jpg"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <title>FlexSwim</title>
        </head>
    <body>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/books/"><img src="/img/swim.jpg" width="40" height="50" className="d-inline-block align-center" alt="" />FlexSwim</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/workout/new">Add Workout</a>
              </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Show All Workouts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/books/:id/edit">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/books/:id/edit">Contact</a>
              </li>
        </ul>
            <span className="navbar-text">
             TODO
            </span>
            <span className="nav-item">
                <a className="nav-link" href="/books/login">TODO</a>
            </span>
              <span className="nav-item">
                <a className="nav-link" href="/logout">Logout</a>
              </span>
      </div>
    </nav>
            {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;