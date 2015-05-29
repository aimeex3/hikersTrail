/** @jsx React.DOM */

var React = require('react');
var HikersTrailApp = require('./components/HikersTrailApp.react');

React.renderComponent(
    <HikersTrailApp/>, document.getElementById('hikersTrail')
);