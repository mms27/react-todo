var React = require('react'),
	Item  = require('./item'),
	List;

List = React.createClass({
	render: function () {
		var items = this.props.items.map(function (item) {
			return <Item key={item.id} text={item.text} id={item.id} onTodoRemove={this.props.onTodoRemove} />;
		}, this);

		return (
			<div>
				{items}
			</div>
		);
	}
});

module.exports = List;