var React = require('react'),
	Item;

Item = React.createClass({
    getInitialState: function () {
        return { read: false };
    },

    markRead: function () {
        if (this.state.read) {
            return;
        }

        this.setState({ read: true });
    },

	render: function () {
        var style = {};

        if (!this.state.read) {
            style.fontWeight = 'bold';
        }

		return (
            <div className='item' onClick={this.markRead} style={style}>
                <span>{this.props.text}</span>
                <span onClick={this.props.onTodoRemove} className='remove' data-item={this.props.id}></span>
            </div>
        );
	}
});

module.exports = Item;