var React = require('react'),
	Item  = require('./item'),
	List;

List = React.createClass({
	render: function () {
		var completeSwitcher = this.props.completeSwitcher,
			items,
			remove;

		items = this.props.items.map(function (item) {

			return <Item
				{...item}
				onComplete={completeSwitcher(item, true)}
				onIncomplete={completeSwitcher(item, false)}
				onRemove={this.props.onRemove} />
		}, this);

		return <div className='todo-list'>{items}</div>;
	}
});

module.exports = List;