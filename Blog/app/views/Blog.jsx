
var Blog = React.createClass({

	render: function () {

		return (
			<div>
				<header className="blog-header">
					<h1>Please React!</h1>
					<h2>because that's what you should do.</h2>
				</header>

				<div className="post-list">
					<div className="post">
						<h1>Post 1</h1>
						<div className="post-content">Post 1 text Lorem Ipsum</div>
					</div>
					<div className="post">
						<h1>Post 2</h1>
						<div className="post-content">Post 2 text Lorem Ipsum</div>
					</div>
					<div className="post">
						<h1>Post 3</h1>
						<div className="post-content">Post 3 text Lorem Ipsum</div>
					</div>
				</div>
				<footer className="blog-footer">Copyright &copy; 2015. Kornelije Petak</footer>
			</div>
		);
	}
});

React.render(<Blog />, document.getElementById("app"));