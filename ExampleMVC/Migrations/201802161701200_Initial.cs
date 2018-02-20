namespace ExampleMVC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "SiteUser.Messages",
                c => new
                    {
                        MessageID = c.Int(nullable: false, identity: true),
                        Content = c.String(),
                        UserID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.MessageID)
                .ForeignKey("SiteUser.Users", t => t.UserID, cascadeDelete: true)
                .Index(t => t.UserID);
            
            CreateTable(
                "SiteUser.Users",
                c => new
                    {
                        UserID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.UserID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("SiteUser.Messages", "UserID", "SiteUser.Users");
            DropIndex("SiteUser.Messages", new[] { "UserID" });
            DropTable("SiteUser.Users");
            DropTable("SiteUser.Messages");
        }
    }
}
