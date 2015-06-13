var request = require('request');

var URI = 'https://www.everytrail.com/api/index/search'
var KEY = '46c8a6e23a9a55d5b69874c7be25fc24';
var	SECRET = 'b9cac6025efcfba1';
var auth = new Buffer(KEY + ':' + SECRET).toString('base64');

var API = {
	searchIndex: function(searchString) {
		console.log('auth', auth);
		request.get({
			uri: URI,
			headers: {
				Authorization: 'Basic' + auth
			},
			qs: {
				q: searchString
			}
		});
	}

};

module.exports = API;