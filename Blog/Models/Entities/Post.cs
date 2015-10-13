using System;

namespace Blog.Models.Entities
{
	public class Post
	{
		public int Id { get; set; }

		public string Text { get; set; }

		public DateTime Timestamp { get; set; }

		public string Author { get; set; }

		public string ImageUrl { get; set; }

		public string Tags { get; set; }
	}
}