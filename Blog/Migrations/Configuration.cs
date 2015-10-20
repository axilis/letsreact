namespace Blog.Migrations
{
	using IncidentCS;
	using Models.Entities;
	using System;
	using System.Data.Entity;
	using System.Data.Entity.Migrations;
	using System.Globalization;
	using System.Linq;

	internal sealed class Configuration : DbMigrationsConfiguration<BlogDb>
	{
		public Configuration()
		{
			AutomaticMigrationsEnabled = false;
		}

		protected override void Seed(BlogDb context)
		{
			if (context.Posts.Any())
				return;

			Incident.Culture = new CultureInfo("en-US");

			var authors = Enumerable.Range(0, 5)
				.Select(_ => Incident.Human.FullName)
				.ToList();

			var tags = Enumerable.Range(0, 20)
				.Select(_ => Incident.Text.Word)
				.Distinct()
				.ToList();

			DateTime start = new DateTime(2015, 1, 1);
			DateTime end = new DateTime(2015, 8, 1);

			for (int i = 0; i < 20; i++)
			{
				var sentenceCount = Incident.Primitive.IntegerBetween(5, 20);
				var sentences = string.Join(" ",
					Enumerable.Range(0, sentenceCount).Select(_ => Incident.Text.Sentence));

				int tagCount = Incident.Primitive.IntegerBetween(0, 3);
				var selectedTags = string.Join(",",
					Enumerable.Range(0, tagCount).Select(_ => tags.ChooseAtRandom()).Distinct());

				var title = string.Join(" ",
					Enumerable.Range(0, Incident.Primitive.IntegerBetween(2, 5)).Select(_ => Incident.Text.Word));

				context.Posts.Add(new Post()
				{
					Author = authors.ChooseAtRandom(),
					Title = title,
					Timestamp = Incident.Primitive.TimeBetween(start, end),
					Text = sentences,
					ImageUrl = Incident.Web.Url,
					Tags = selectedTags
				});
			}

			foreach (var post in context.Posts.Local)
			{
				var commentCount = Incident.Primitive.IntegerBetween(0, 8);

				context.Comments.AddRange(
					Enumerable.Range(0, commentCount).Select(day => new Comment()
					{
						Post = post,
						Author = Incident.Human.FullName,
						Timestamp = Incident.Primitive.TimeBetween(post.Timestamp.AddDays(day), post.Timestamp.AddDays(day + 1)),
						Text = Incident.Text.Paragraph
					})
				);
			}
		}
	}
}
