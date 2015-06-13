/** @jsx React.DOM */

var ClientActionCreators = require('../actions/ClientActionCreators');
var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <div>Hello this is the header
                Search term: <input ref='searchInput' type='text' name='search-input' />
                <button onClick={this.searchTrails} />
            </div>

            );
    },

    searchTrails: function() {
        ClientActionCreators.searchTrails(this.refs.searchInput.getDOMNode().value);
    }
});

module.exports = Header;