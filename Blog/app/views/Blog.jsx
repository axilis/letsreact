
var Blog = React.createClass({

	componentDidMount: function() {

		var _this = this;

		$.get("/Home/Abstracts")
		.done(function(data) {
			_this.setState({ posts: data, displayed: data });
		});

		this.postEventToken = D.subscribe("post", function(postId) {
			this.setState({ postId: postId });
		}.bind(this));
	},

	getInitialState: function() {
		return {
			posts: [],
			displayed: [],
			postId: null
		};
	},

	onSearch: function(e) {
		var searchTerm = e.target.value;

		var displayed = this.state.posts.filter(function(post) {
			return (
				post.Text.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
				|| post.Title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
			);
		});

		this.setState({ displayed: displayed });
	},

	render: function() {

		var content = null;
		var search = null;

		if (this.state.postId === null)
		{
			var posts = this.state.displayed.map(function(post) {
				return <BlogPost key={post.Id} postId={post.Id} title={post.Title} abstract={post.Text} />;
			});

			content = <div className="post-list">{posts}</div>;

			search = (
				<div className="search-box">
					Search: <input onChange={this.onSearch} />
				</div>
			);
		}
		else {
			content = <PostView postId={this.state.postId} />;
		}

		
		return (
			<div>
				<header className="blog-header">
					<h1>Please React!</h1>
					<h2>because that's what you should do.</h2>
					{search}
				</header>

				{content}

				<footer className="blog-footer">Copyright &copy; 2015. Kornelije Petak</footer>
			</div>
		);
	}
});

React.render(<Blog />, document.getElementById("app"));