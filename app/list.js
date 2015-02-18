var React = require('react'),
	Item  = require('./item'),
	List;

List = React.createClass({
	render: function () {
		var completeSwitcher = this.props.completeSwitcher,
			items,
			remove;

		function isVisible(item) { return item.visible; };

		function createItem(item) {
			return <Item
				{...item}
				onComplete={completeSwitcher(item, true)}
				onIncomplete={completeSwitcher(item, false)}
				onRemove={this.props.onRemove} />
		};

		items = this.props.items.filter(isVisible).map(createItem, this);

		return <div className='todo-list'>{items}</div>;
	}
});

module.exports = List;