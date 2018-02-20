using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Data.Entity;
namespace ExampleMVC.Models.Hubs
{
	public class MessengerHub : Hub
	{
        public SATSModel _dbContext = new SATSModel();

		public override Task OnConnected()
		{
            
            Clients.Caller.allMessages(_dbContext.Messages.Select(m => new { m.User.Name, m.Content }).ToList());
			return base.OnConnected();
		}

		public void Send(string name, string message)
		{
			
            User usr = _dbContext.Users.Where(u => u.Name == name).FirstOrDefault();
            if (usr == null) {
                usr = _dbContext.Users.Create();
                usr.Name = name;
                _dbContext.Users.Add(usr);
                _dbContext.SaveChanges();
                usr = _dbContext.Users.Where(u => u.Name == name).FirstOrDefault();
            }
            Message msg = _dbContext.Messages.Create();
            msg.User = usr;
            msg.Content = message;
            _dbContext.Messages.Add(msg);

            _dbContext.SaveChanges();

            Clients.All.newMessage(name, message);
        }
	}
}