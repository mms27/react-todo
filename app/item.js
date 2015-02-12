var React = require('react'),
	Item;

Item = React.createClass({
	render: function () {
        var className = 'todo-item' + (this.props.complete ? ' complete' : ''); 

		return (
            <div className={className}>
                <span>{this.props.text}</span>
                <span onClick={this.props.onRemove}     className='button remove'>Remove</span>
                <span onClick={this.props.onComplete}   className='button mark-complete'>Mark complete</span>
                <span onClick={this.props.onIncomplete} className='button mark-incomplete'>Mark incomplete</span>
            </div>
        );
	}
});

module.exports = Item;