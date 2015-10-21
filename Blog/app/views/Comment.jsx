
var Comment = React.createClass({

	propTypes: {
		comment: React.PropTypes.object.isRequired
	},

	render: function() {

		var commentStyle = { marginBottom: 15, width: "50%" };
		var iconStyle = { marginRight: 5 };
		var itemStyle = { marginRight: 15 };

		return (
			<div className="comment" style={commentStyle}>

				<div style={{ marginBottom: 5 }}>

					<i className="fa fa-user" style={iconStyle}></i>
					<span style={itemStyle}>{this.props.comment.Author}</span>

					<i className="fa fa-clock-o" style={iconStyle}></i>
					<span style={itemStyle}>{this.props.comment.CommentTime}</span>
				</div>
				<div style={{ lineHeight: 1.5 }}>{this.props.comment.Text}</div>
			</div>
		);
	}
});
