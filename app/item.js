var React = require('react'),
	Item;

Item = React.createClass({
	render: function () {
		return <div>{this.props.text}</div>;
	}
});

module.exports = Item;