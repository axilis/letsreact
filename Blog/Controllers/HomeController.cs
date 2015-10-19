using Blog.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

		[HttpGet]
		public ActionResult Posts()
		{
			using (BlogDb db = new BlogDb())
				return Json(db.Posts.ToList(), JsonRequestBehavior.AllowGet);
		}
    }
}