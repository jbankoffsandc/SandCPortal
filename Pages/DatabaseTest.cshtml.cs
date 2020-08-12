using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Routing;

namespace mom_application.Pages
{
    public class DatabaseTestModel : PageModel
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        HttpContext _context;
        public DatabaseTestModel(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task OnGetAsync() {

            Table = _httpContextAccessor.HttpContext.Request.Path.ToString().Split('/')[2];
           
        }

        [BindProperty] public string Table { get; set; }
    }
}