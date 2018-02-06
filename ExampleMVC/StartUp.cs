using Microsoft.Owin;
using Owin;
[assembly: OwinStartup(typeof(ExampleMVC.Startup))]
namespace ExampleMVC
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			app.MapSignalR();
		}
	}
}