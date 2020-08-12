using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mom_application.ViewComponents
{
    public class SimpleDatabase : ViewComponent
    {

        public async Task<IViewComponentResult> InvokeAsync()
        {
             return View(new SimpleDatabase());
        }
    }
}
