// server.js
const express = require('express');
const app = express();
const path = require('path');

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        res.set('Content-Security-Policy', "default-src 'self'; connect-src 'self' https://fonts.googleapis.com; frame-src 'self' https://fonts.googleapis.com");
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/sparkline'));
// Start the app by listening on the default
// Heroku port


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/sparkline/index.html'));
});

var server_port = process.env.PORT || 8080;
var server_host = '0.0.0.0';
app.listen(server_port, server_host, function() {
  console.log('Listening on port %d', server_port);
});
