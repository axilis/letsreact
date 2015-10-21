using System;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;

namespace Blog.Models.Entities
{
	public class Post
	{
		public int Id { get; set; }

		public string Title { get; set; }

		public string Text { get; set; }

		public DateTime Timestamp { get; set; }

		public string Author { get; set; }

		public string ImageUrl { get; set; }

		public string Tags { get; set; }


		[NotMapped]
		public string PostTime
		{
			get
			{
				return Timestamp.ToString("yyyy-MM-dd HH:mm");
			}
		}
		[NotMapped]
		public string[] TagList
		{
			get
			{
				return Tags.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
			}
		}
	}
}