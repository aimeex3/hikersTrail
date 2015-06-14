var request = require('request');

var URI = 'http://localhost:9090/searchEverytrail'; // todo: relative url?

var API = {
	searchIndex: function(searchString) {
		request.get({
			uri: URI,
			qs: {
				q: searchString
			}
		});
	}

};

module.exports = API;