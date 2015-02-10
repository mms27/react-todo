var React = require('react'),
	List  = require('./list'),
	Input = require('./input'),
	Container;

Container = React.createClass({
	getInitialState: function () {
		return { items: [] };
	},

	addTodo: function (text) {
		this.state.items.push(text);
		this.setState({ items: this.state.items });
	},

	removeTodo: function () {
		console.log(arguments)
	},

	render: function () {
		return ( 
			<div>
				<Input onTodoAdd={this.addTodo} />
				<List title="Todo List" items={this.state.items} onTodoRemove={this.removeTodo} />
			</div>
		);
	}
});

module.exports = Container;