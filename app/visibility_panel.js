var React = require('react'),
    Panel;

Panel = React.createClass({
    render: function () {
        return (
            <div className='visibility-panel'>
                <button onClick={this.props.onShowAll}>Show all</button>
                <button onClick={this.props.onShowRead}>Show read</button>
                <button onClick={this.props.onShowUnread}>Show unread</button>
            </div>
        );
    }
});

module.exports = Panel;