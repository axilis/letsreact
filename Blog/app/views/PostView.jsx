
var PostView = React.createClass({

	propTypes: {
		postId: React.PropTypes.number.isRequired
	},

	getInitialState: function() {
		return {
			post: null
		};
	},

	componentDidMount: function() {
		$.get("/Home/Post/" + this.props.postId).
		done(function(post) {
			this.setState({ post: post });
		}.bind(this));
	},

	goBack: function() {
		D.publish("post", null);
	},

	render: function() {

		if (this.state.post === null)
			return <div>Loading...</div>;

		return (
			<div className="post-view">
				<h1>{this.state.post.Title}</h1>
				<h2>{this.state.post.Author}</h2>
				<h2>{this.state.post.PostTime}</h2>
				<div className="post-content">
					{this.state.post.Text}
				</div>
				<div className="back-link" onClick={this.goBack}>Back to posts</div>
			</div>
		);
	}
});
