var React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
          <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/default.css"/>
            <link rel="icon" href="img/swim.jpg"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <title>FlexSwim</title>
        </head>
    <body>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href='#'>FlexSwim</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workout/new">Add Workout</a>
              </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Show All Workouts</a>
              </li>
        </ul>
            <span className="navbar-text">

            </span>
            <span className="nav-item">
                <a className="nav-link" href="#"></a>
            </span>
              <span className="nav-item">
                <a className="nav-link" href="/logout">Logout</a>
              </span>
      </div>
    </nav>
            {this.props.children}
  <div className="container" align="center">
<div className="row text-center">

      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src="http://placehold.it/500x325" alt="image"/>
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">This is where you see your swimming workouts.</p>
          </div>
          <div className="card-footer">
            <a href="/" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>

    </div>
</div>

        </body>
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© 2020 Copyright: Made by foodie who swims
            </div>

        </footer>
      </html>
    );
  }
}

module.exports = Layout;