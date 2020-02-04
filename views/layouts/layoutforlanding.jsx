var React = require('react');

class LayoutforLanding extends React.Component {
  render() {
    return (
      <html>
          <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
    <link rel="stylesheet" type="text/css" href="/one-page.css"/>
            <link rel="icon" href="img/swim.jpg"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <title>{this.props.title}</title>
        </head>
    <body>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">FlexSwim</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
        </ul>
            <span className="nav-item">
                <a className="nav-link" href="/register">Register</a>
            </span>
              <span className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </span>
      </div>
    </nav>
            {this.props.children}
        </body>
        <footer class="page-footer font-small blue">
            <div class="footer-copyright text-center py-3">© 2020 Copyright: Made by foodie who swims
            </div>
        </footer>
      </html>
    );
  }
}

module.exports = LayoutforLanding;