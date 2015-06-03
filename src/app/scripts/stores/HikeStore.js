var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var HikersTrailConstants = require('../constants/HikersTrailConstants');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var HikeStore = _.extend({}, EventEmitter.prototype, {

    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;

        switch(action.actionType) {
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
