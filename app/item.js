var React = require('react'),
	Item;

Item = React.createClass({
	render: function () {
		return (
            <div className='todo-item' onClick={this.markRead}>
                <span>{this.props.text}</span>
                <span onClick={this.props.onTodoRemove}     className='button remove'       data-item={this.props.id}>Remove</span>
                <span onClick={this.props.onTodoMarkRead}   className='button mark-read'    data-item={this.props.id}>Mark read</span>
                <span onClick={this.props.onTodoMarkUnread} className='button mark-unread'  data-item={this.props.id}>Mark unread</span>
            </div>
        );
	}
});

module.exports = Item;