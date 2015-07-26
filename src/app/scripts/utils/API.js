var request = require('request');
var ServerActionCreators = require('../actions/ServerActionCreators');
var URI = 'http://localhost:9090/trips'; // todo: relative url?

var API = {
	searchIndex: function(searchString) {
		request.get({
			uri: URI,
			qs: {
				limit: 10
			}
		}, function (error, response, body) {
            var hikes = JSON.parse(JSON.parse(body));
            ServerActionCreators.receiveTrails(hikes);
        });
	}

};

module.exports = API;