var express = require('express');
var http = require('http');
var request = require('request');
var _ = require('lodash');

var app = express();

var browserify = require('browserify-middleware');

// Everytrail
//var URI = 'https://www.everytrail.com/api/index/search';
//var KEY = '46c8a6e23a9a55d5b69874c7be25fc24';
//var	SECRET = 'b9cac6025efcfba1';

// Transit & Trails
var URI = 'https://api.transitandtrails.org/api/v1/trips';
var KEY = '5073d41fc95b058ea39e797e556eda020320e89e6cd254929320c74f191ffdf9';


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

app.get('/trips', function(req, res) {
    var qs = _.extend(req.query, {
        key : KEY
    });
    request.get({
        uri: URI,
        qs: qs
    }, function(error, response, body) {
        res.json(body); // actually getting xml back
    });
});

//app.get('/searchEverytrail', function(req, res) {
//    request.get({
//        uri: URI,
//        'auth': {
//            'user': KEY,
//            'pass': SECRET
//        },
//        qs: {
//            q: req.query
//        }
//    }, function(error, response, body) {
//        res.json(body); // actually getting xml back
//    });
//});

var port = process.env.PORT || 9090;
http.createServer(app).listen(port, function() {
    console.log('Express server listening on port', port);
});
