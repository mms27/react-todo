var React = require('react'),
    Panel;

Panel = React.createClass({
    render: function () {
        return (
            <div className='visibility-panel'>
                <div className='button' onClick={this.props.onShowAll}>Show all</div>
                <div className='button' onClick={this.props.onShowComplete}>Show read</div>
                <div className='button' onClick={this.props.onShowIncomplete}>Show unread</div>
            </div>
        );
    }
});

module.exports = Panel;