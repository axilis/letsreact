using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Blog.Models.Entities
{
	public class BlogDb : DbContext
	{
		public DbSet<Post> Posts { get; set; }

		public DbSet<Comment> Comments { get; set; }

		public DbSet<Event> Events { get; set; }
	}
}