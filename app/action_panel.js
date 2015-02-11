var React = require('react'),
    Panel;

Panel = React.createClass({
    render: function () {
        return (
            <div className='action-panel'>
                <button onClick={this.props.onMarkRead}>Mark all as read</button>
                <button onClick={this.props.onMarkUnRead}>Mark all as unread</button>
            </div>
        );
    }
});

module.exports = Panel;