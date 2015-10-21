
var Expander = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	getInitialState: function() {
		return {
			expanded: false
		};
	},

	onClick: function() {
		this.setState({ expanded: !this.state.expanded });
	},

	render: function() {

		var expanderStyle = {
			display: this.state.expanded ? "block" : "none"
		};

		var cls = this.state.expanded ? "fa fa-caret-right" : "fa fa-caret-down";

		return (
			<div className="expander" style={this.props.style}>

				<h1 onClick={this.onClick}><i className={cls}></i>{this.props.title}</h1>

				<div className="expander-content" style={expanderStyle}>
					{this.props.children}
				</div>

			</div>
		);
	}
});

