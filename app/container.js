var React 			= require('react'),
	List  			= require('./list'),
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
			text: text,
			id: _.uniqueId()
		});
		this.setState({ items: this.state.items });
	},

	removeTodo: function (e) {
		var button 	= e.currentTarget,
			id 		= button.getAttribute('data-item'),
			items   = this.state.items,
			target;

		target = _.findWhere(items, { id: id });
		items.splice(items.indexOf(target), 1);
		this.setState({ items: items });
	},

	showAll: function () {
		var items = this.state.items;

		this.setState({ items: items });
	},

	render: function () {
		return ( 
			<div>
				<h1>'Todo List'</h1>
				<Input onTodoAdd={this.addTodo} />
				<List items={this.state.items} onTodoRemove={this.removeTodo} />
				<VisibilityPanel onShowAll={this.showAll} onShowRead={this.showRead} onShowUnread={this.showUnread} />
				<ActionPanel onMarkRead={this.markAllRead} onMarkUnread={this.markAllUnread} />
			</div>
		);
	}
});

module.exports = Container;