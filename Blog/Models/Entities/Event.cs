using System;

namespace Blog.Models.Entities
{
	public class Event
	{
		public int Id { get; set; }

		public string Title { get; set; }
		public string Description { get; set; }

		public DateTime Start { get; set; }
		public DateTime? End { get; set; }

		public bool WholeDay { get; set; }

		public double? Latitude { get; set; }
		public double? Longitude { get; set; }

		public Post RelatedPost { get; set; }
		public int? RelatedPostId { get; set; }
	}
}