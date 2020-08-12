using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace mom_application.ViewCompo
{
  
    public class Default : ViewComponent
    {
        public void OnGet()
        {


        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
             return View(default);
        }
    }
}