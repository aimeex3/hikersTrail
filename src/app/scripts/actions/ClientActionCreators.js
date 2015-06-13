var API = require('../utils/API');

var ClientActionCreators = {
	searchTrails: function(searchString) {
		API.searchIndex(searchString);
	}
};

module.exports = ClientActionCreators;