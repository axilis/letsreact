namespace Blog.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Model : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PostId = c.Int(nullable: false),
                        Author = c.String(),
                        Text = c.String(),
                        Timestamp = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Posts", t => t.PostId, cascadeDelete: true)
                .Index(t => t.PostId);
            
            CreateTable(
                "dbo.Posts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                        Timestamp = c.DateTime(nullable: false),
                        Author = c.String(),
                        ImageUrl = c.String(),
                        Tags = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Events",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Description = c.String(),
                        Start = c.DateTime(nullable: false),
                        End = c.DateTime(),
                        WholeDay = c.Boolean(nullable: false),
                        Latitude = c.Double(),
                        Longitude = c.Double(),
                        RelatedPostId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Posts", t => t.RelatedPostId)
                .Index(t => t.RelatedPostId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Events", "RelatedPostId", "dbo.Posts");
            DropForeignKey("dbo.Comments", "PostId", "dbo.Posts");
            DropIndex("dbo.Events", new[] { "RelatedPostId" });
            DropIndex("dbo.Comments", new[] { "PostId" });
            DropTable("dbo.Events");
            DropTable("dbo.Posts");
            DropTable("dbo.Comments");
        }
    }
}
