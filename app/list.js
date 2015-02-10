var React = require('react'),
	Item  = require('./item'),
	List;

List = React.createClass({
	render: function () {
		var items = this.props.items.map(function (text) {
			return (
				<div>				
					<Item text={text} />
					<button onClick={this.props.onTodoRemove}>Remove</button>
				</div>
			);
		}, this);

		return (
			<div>
				<h1>{this.props.title}</h1>
				{items}
			</div>
		);
	}
});

module.exports = List;