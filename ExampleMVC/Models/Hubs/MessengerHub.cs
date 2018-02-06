using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace ExampleMVC.Models.Hubs
{
	public class MessengerHub : Hub
	{
		public override Task OnConnected()
		{
			return base.OnConnected();
		}

		public void Send(string name, string message)
		{
			Clients.All.newMessage(name, message);
		}
	}
}