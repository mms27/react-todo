var React = require('react'),
    Panel;

Panel = React.createClass({
    render: function () {
        return (
            <div className='visibility-panel'>
                <div className='button' onClick={this.props.onShowAll}>Show all</div>
                <div className='button' onClick={this.props.onShowRead}>Show read</div>
                <div className='button' onClick={this.props.onShowUnread}>Show unread</div>
            </div>
        );
    }
});

module.exports = Panel;