var express = require('express');
var http = require('http');

var app = express();

var browserify = require('browserify-middleware');

app.use('/scripts/', browserify('src/app/scripts/', {
    transform: [
        'reactify'
    ]
}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: 'web'
    });
});

var port = process.env.PORT || 8080;
http.createServer(app).listen(port, function() {
    console.log('Express server listening on port', port);
});