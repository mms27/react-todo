var React = require('react'),
	Input;

Input = React.createClass({
	addTodo: function (e) {
		var target = e.target,
			value  = this.refs.input.getDOMNode().value;

		if (e.key === 'Enter' && value) {
			this.props.onTodoAdd(value);
			value = '';
		}
	},

	render: function () {
		return <input ref="input" onKeyPress={this.addTodo} />;
	}
});

module.exports = Input;