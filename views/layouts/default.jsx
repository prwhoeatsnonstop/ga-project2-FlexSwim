var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <body>
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
            <link rel="icon" href="https://www.flaticon.com/free-icon/swimming-figure_67037"/>
            <title>{this.props.title}</title>
          </head>

            <h1>all my other content</h1>
            {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;