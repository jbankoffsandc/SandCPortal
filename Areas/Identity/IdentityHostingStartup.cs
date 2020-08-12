using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using mom_application.Areas.Identity.Data;
using mom_application.Data;

[assembly: HostingStartup(typeof(mom_application.Areas.Identity.IdentityHostingStartup))]
namespace mom_application.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<mom_applicationContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("mom_applicationContextConnection")));

                services.AddDefaultIdentity<mom_applicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<mom_applicationContext>();
            });
        }
    }
}