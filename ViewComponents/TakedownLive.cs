using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mom_application.ViewComponents
{
    public class TakedownLive : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(new TakedownLive());
        }
    }
}
