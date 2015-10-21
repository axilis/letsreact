
var BlogPost = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		abstract: React.PropTypes.string.isRequired,
		postId: React.PropTypes.number.isRequired
	},

	getInitialState: function() {
		return {
			expanded: false,
			content: this.props.abstract
		};
	},

	readMoreClicked: function() {

		$.get("/Home/Post/" + this.props.postId)
		.done(function(post) {

			this.setState({ content: post.Text, expanded: true });

		}.bind(this));
	},

	titleClicked: function() {
		D.publish("post", this.props.postId);
	},

	render: function() {

		var readMore = this.state.expanded
		? null
		: <span className="more-link" onClick={this.readMoreClicked}>Read more...</span>;

		return (
			<div className="post">
				<h1 onClick={this.titleClicked}>{this.props.title}</h1>
				<div className="post-content">
					{this.state.content}
					{readMore}
				</div>
			</div>
		);
	}
});
