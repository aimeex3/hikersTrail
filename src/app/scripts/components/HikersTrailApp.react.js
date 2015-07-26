/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.react');
var TripList = require('./TripList.react');

var HikersTrailApp = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div>
                    Hello this is hikers trail
                </div>
                <TripList />
            </div>
        );
    }
});

module.exports = HikersTrailApp;
