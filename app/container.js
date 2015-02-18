'use strict';

var React 			= require('react'),
	Input 			= require('./input'),
	List 			= require('./list'),
	VisibilityPanel = require('./visibility_panel'),
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

	getSwitcher: function (prop, item, value) {
		return function () {
			item[prop] = value;

			this.setState({ items: this.state.items });	
		}.bind(this);
	},

	showAll: function () {
		this.state.items.forEach(function (item) {
			item.visible = true;
		});

		this.setState({ items: this.state.items });
	},

	show: function (complete) {
		this.state.items.forEach(function (item) {
			item.visible = complete ? item.complete : !item.complete;
		});

		this.setState({ items: this.state.items });
	},

	render: function () {
		return (
			<div className='todo-container'>
				<h1>Todo List</h1>
				<Input onTodoAdd={this.addTodo} />

				<List
					items={this.state.items}
					completeSwitcher={this.getSwitcher.bind(this, 'complete')}
					onRemove={this.removeTodo} />

				<VisibilityPanel
					onShowAll={this.showAll}
					onShowComplete={this.show.bind(this, true)}
					onShowIncomplete={this.show.bind(this, false)} />
			</div>
		);
	}
});

module.exports = Container;