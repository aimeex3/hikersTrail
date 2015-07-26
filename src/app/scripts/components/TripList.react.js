/** @jsx React.DOM */

var React = require('react');
var HikeStore = require('../stores/HikeStore');

function getStateFromStores() {
    return {
        hikes : HikeStore.getAll()
    };
}

var TripList = React.createClass({
    componentDidMount : function() {
        HikeStore.addChangeListener(this.onChange);
    },

    componentWillUnmount : function() {
        HikeStore.removeChangeListener(this.onChange);
    },

    onChange : function() {
        this.setState(getStateFromStores());
    },

    render: function() {
        if (!this.state) {
            return false;
        }
        return (
            <div>
                <div>
                { this.state.hikes }
                </div>
            </div>
            );
    }
});

module.exports = TripList;