'use strict';

var React 			= require('react'),
	Input 			= require('./input'),
	List 			= require('./list'),
	VisibilityPanel = require('./visibility_panel'),
	ActionPanel 	= require('./action_panel'),
	_	  			= require('underscore'),
	Container;

Container = React.createClass({
	getInitialState: function () {
		return { items: [] };
	},

	addTodo: function (text) {
		var item;

		item = {
			visible: 		true,
			complete: 		false,
			text: 			text,
			id: 	 		_.uniqueId(),
		};

		this.state.items.unshift(item);	

		this.setState({ items: this.state.items });
	},

	removeTodo: function (item) {
		var items = this.state.items;

		items.splice(items.indexOf(item), 1);

		this.setState({ items: items });
	},

	getSwitcher: function (prop) {
		return function (item, value) {
			item[prop] = value;

			this.setState({ items: this.state.items });
		}.bind(this);
	},

	render: function () {
		return (
			<div className='todo-container'>
				<h1>Todo List</h1>
				<Input onTodoAdd={this.addTodo} />

				<List
					items={this.state.items}
					completeSwitcher={this.getSwitcher.bind(this, 'complete')}
					onRemove={this.props.removeTodo} />

				<VisibilityPanel
					onShowAll={this.showAll}
					onShowComplete={this.showComplete}
					onShowIncomplete={this.showIncomplete} />

				<ActionPanel
					onMarkComplete={this.markAllComplete}
					onMarkIncomplete={this.markAllIncomplete} />
			</div>
		);
	}
});

module.exports = Container;