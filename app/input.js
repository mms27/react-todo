var React = require('react'),
	Input;

Input = React.createClass({
	addTodo: function (e) {
		var node  = this.refs.input.getDOMNode(), 
			value = node.value;

		if (e.key === 'Enter' && value) {
			this.props.onTodoAdd(value);
			node.value = '';
		}
	},

	render: function () {
		return <input className='input' ref='input' onKeyPress={this.addTodo} />;
	}
});

module.exports = Input;