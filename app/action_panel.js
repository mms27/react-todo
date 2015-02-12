var React = require('react'),
    Panel;

Panel = React.createClass({
    render: function () {
        return (
            <div className='action-panel'>
                <div className='button' onClick={this.props.onMarkComplete}>Mark All Complete</div>
                <div className='button' onClick={this.props.onMarkUnComplete}>Mark All Incomplete</div>
            </div>
        );
    }
});

module.exports = Panel;