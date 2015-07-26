var API = require('../utils/API');
var Dispatcher = require('../dispatcher/AppDispatcher');
var HikersTrailConstants = require('../constants/HikersTrailConstants');

var ServerActionCreators = {
    receiveTrails: function(data) {
        Dispatcher.handleAction({
            actionType : HikersTrailConstants.RECEIVE_DATA,
            data : data
        });
    }
};

module.exports = ServerActionCreators;