namespace ExampleMVC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateSchema : DbMigration
    {
        public override void Up()
        {
            MoveTable(name: "dbo.Messages", newSchema: "SiteUser");
            MoveTable(name: "dbo.Users", newSchema: "SiteUser");
        }
        
        public override void Down()
        {
            MoveTable(name: "SiteUser.Users", newSchema: "dbo");
            MoveTable(name: "SiteUser.Messages", newSchema: "dbo");
        }
    }
}
