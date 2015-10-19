
var Blog = React.createClass({

	render: function () {

		var posts = [];
		for (var i = 0; i < 100; i++) {
			posts.push(
				<div className="post">
					<h1>Post {i}</h1>
					<div className="post-content">Post {i} text Lorem Ipsum</div>
				</div>
			);
		}

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