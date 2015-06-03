/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.react.js');

var HikersTrailApp = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div>
                    Hello this is hikers trail
                </div>
            </div>
        );
    }
});

module.exports = HikersTrailApp;