

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('../app/routes');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('config');

var app = express();

app.set('port', config['node-port']);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));


// -------------npm
//  register the API
// --------------
require('./api')(app);

// --------------
//  set up moongose and connect the db
// --------------
var mongoose = require('./mongoose');


//------------------------------
// Express Routes
//------------------------------
app.use('/', require('./routes/index'));


//------------------------------
// React Routes
//------------------------------
app.use((req, res) => {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {

            /// -----------------
            // disable the server render
            //  -----------------
            //var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            //var page = swig.renderFile('views/index.html', { html: html });

            var page = swig.renderFile('views/index.html');

            res.status(200).send(page);

        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
