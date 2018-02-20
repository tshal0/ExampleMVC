using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExampleMVC.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string Name { get; set; }
        
        public virtual List<Message> Messages { get; set; }
    }

}