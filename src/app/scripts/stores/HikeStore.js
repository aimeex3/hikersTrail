var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var HikersTrailConstants = require('../constants/HikersTrailConstants');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _hikes = {};

function add(hikeArray) {
    _.each(hikeArray, function(hike) {
        var id = hike.id;
        _hikes[id] = hike;
    });
}

var HikeStore = _.extend({}, EventEmitter.prototype, {

    getAll : function() {
        return _hikes;
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;

        switch(action.actionType) {
            case HikersTrailConstants.RECEIVE_DATA:
                add(action.data);
                HikeStore.emitChange();
                break;
            default:
                return true;
        }
        return true;
    }),

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    }

});

module.exports = HikeStore;
