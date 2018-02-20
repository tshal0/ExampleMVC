namespace ExampleMVC
{
    using System;
    using System.Data.Entity;
    using System.Linq;
    using ExampleMVC.Models;

    public class SATSModel : DbContext
    {
        // Your context has been configured to use a 'SATSModel' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'ExampleMVC.SATSModel' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'SATSModel' 
        // connection string in the application configuration file.
        public SATSModel()
            : base("name=SATSModel")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .ToTable("Users", "SiteUser")
                .HasKey(i => i.UserID);

            modelBuilder.Entity<User>()
                .Property(i => i.UserID)
                .HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Message>().ToTable("Messages", "SiteUser");
        }
        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        // public virtual DbSet<MyEntity> MyEntities { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}