var React 			= require('react'),
	Input 			= require('./input'),
	_	  			= require('underscore'),
	VisibilityPanel = require('./visibility_panel'),
	ActionPanel 	= require('./action_panel'),
	Container;

Container = React.createClass({
	getInitialState: function () {
		return { items: [] };
	},

	addTodo: function (text) {
		this.state.items.unshift({
			visible: true,
			read: false,
			text: text,
			id: _.uniqueId()
		});
		this.setState({ items: this.state.items });
	},

	removeTodo: function (item) {
		var items = this.state.items;

		items.splice(items.indexOf(item), 1);

		this.setState({ items: items });
	},

	showAll: function () {
		this.state.items.each(function (item) {
			item.visible = true;
		});

		this.setState({ items: this.state.items });
	},

	showRead: function () {
		this.state.items.each(function (item) {
			item.visible = item.read;
		});

		this.setState({ items: this.state.items });
	},

	showUnread: function () {
		this.state.items.each(function (item) {
			item.visible = !item.read;
		});

		this.setState({ items: this.state.items });
	},

	markRead: function (item) {
		item.read = true;

		this.setState({ items: this.state.items });
	},

	markUnread: function () {
		item.read = false;

		this.setState({ items: this.state.items });
	}

	render: function () {
		var items,
			removeTodo,
			markRead,
			markUnread;

		items = this.state.items.map(function (item) {
			removeTodo = this.removeTodo.bind(this, item);
			markRead   = this.markRead.bind(this, item);
			markUnread = this.markUnread.bind(this, item);

			return <Item {...item} onTodoRemove={this.removeTodo} onMarkRead={this.markRead} />;
		}, this);

		return (
			<div className='todo-container'>
				<h1>Todo List</h1>
				<Input onTodoAdd={this.addTodo} />
				{items}
				<VisibilityPanel onShowAll={this.showAll} onShowRead={this.showRead} onShowUnread={this.showUnread} />
				<ActionPanel onMarkRead={this.markAllRead} onMarkUnread={this.markAllUnread} />
			</div>
		);
	}
});

module.exports = Container;