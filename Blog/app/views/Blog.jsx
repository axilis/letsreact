
var Blog = React.createClass({

	componentDidMount: function () {

		var _this = this;

		$.get("/Home/Posts")
		.done(function (data) {
			_this.setState({ posts: data });
		});
	},

	getInitialState: function () {
		return {
			posts: []
		};
	},

	render: function () {

		var posts = this.state.posts.map(function(post) {
			return <BlogPost title={post.Title} content={post.Text} />;
		});

		return (
			<div>
				<header className="blog-header">
					<h1>Please React!</h1>
					<h2>because that's what you should do.</h2>
				</header>

				<div className="post-list">
					{posts}
				</div>

				<footer className="blog-footer">Copyright &copy; 2015. Kornelije Petak</footer>
			</div>
		);
	}
});

React.render(<Blog />, document.getElementById("app"));