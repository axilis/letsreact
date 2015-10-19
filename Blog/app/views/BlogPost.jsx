
var BlogPost = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		content: React.PropTypes.string.isRequired
	},

	render: function () {

		return (
			<div className="post">
				<h1>{this.props.title}</h1>
				<div className="post-content">{this.props.content}</div>
			</div>
		);
	}
});
