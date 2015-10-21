using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Blog.Models.Entities
{
	public class Comment
	{
		public int Id { get; set; }

		public Post Post { get; set; }
		public int PostId { get; set; }

		public string Author { get; set; }

		public string Text { get; set; }

		public DateTime Timestamp { get; set; }

		[NotMapped]
		public string CommentTime
		{
			get
			{
				return Timestamp.ToString("yyyy-MM-dd HH:mm");
			}
		}

	}
}