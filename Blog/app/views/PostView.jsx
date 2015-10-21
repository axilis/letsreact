
var PostView = React.createClass({

	propTypes: {
		postId: React.PropTypes.number.isRequired
	},

	getInitialState: function() {
		return {
			post: null,
			newCommentName: "",
			newCommentText: "",
		};
	},

	componentDidMount: function() {
		this.load();
	},

	load: function() {
		$.get("/Home/Post/" + this.props.postId)
		.done(function(post) {
			this.setState({ post: post });
		}.bind(this));
	},

	goBack: function() {
		D.publish("post", null);
	},

	onMouseEnterTitle: function() {
		this.timer = setTimeout(function() {
			this.refs.commentsExpander.expand(true);
		}.bind(this), 1500);
	},

	onMouseExitTitle: function() {
		clearTimeout(this.timer);
	},

	render: function() {

		if (this.state.post === null)
			return <div>Loading...</div>;

		var comments = this.state.post.Comments.map(function(comment) {
			return <Comment key={comment.Id} comment={comment} />
		});

		return (
			<div className="post-view">
				<h1 onMouseOver={this.onMouseEnterTitle} onMouseOut={this.onMouseExitTitle}>{this.state.post.Title}</h1>
				<h2>{this.state.post.Author}</h2>
				<h2>{this.state.post.PostTime}</h2>
				<div className="post-content">
					{this.state.post.Text}
				</div>
				<div className="back-link" onClick={this.goBack}>Back to posts</div>

				<Expander ref="commentsExpander" title="Comments" style={{ marginTop: 20, marginBottom: 7 }}>
					{comments}
					{this.renderEditor()}
				</Expander>
			</div>
		);
	},

	addComment: function() {
		var data = {
			Author: this.state.newCommentName,
			Text: this.state.newCommentText,
			PostId: this.props.postId
		};

		$.post("/Home/AddComment", data)
		.done(function() {
			this.load();
		}.bind(this));
	},

	onNameChange: function(e) {
		this.setState({ newCommentName: e.target.value });
	},

	onTextChange: function(e) {
		this.setState({ newCommentText: e.target.value });
	},

	renderEditor: function() {
		return (
			<div className="comment-editor">
				<h2>Enter a comment:</h2>
				<div>
					<input placeholder="name" value={this.state.newCommentName} onChange={this.onNameChange} />
				</div>
				<div>
					<textarea placeholder="comment" value={this.state.newCommentText} onChange={this.onTextChange} />
				</div>
				<button onClick={this.addComment}>Add</button>
			</div>
		);
	}
});
