﻿
var Blog = React.createClass({

	componentDidMount: function () {

		var _this = this;

		$.get("/Home/Abstracts")
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
			return <BlogPost key={post.Id} postId={post.Id} title={post.Title} abstract={post.Text} />;
		});

		return (
			<div>
				<header className="blog-header">
					<h1>Please React!</h1>
					<h2>because that's what you should do.</h2>

					<div className="search-box">
						Search: <input />
					</div>

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