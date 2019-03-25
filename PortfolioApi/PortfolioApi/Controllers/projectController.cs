using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using PortfolioApi.Models;

namespace PortfolioApi.Controllers
{
    [EnableCors(origins: "http://gregtiuportfolio.s3-website.us-east-2.amazonaws.com", headers: "*", methods: "*")]
    public class projectController : ApiController
    {
        private projectModel db = new projectModel();

        // GET: api/project
        public IQueryable<project> Getprojects()
        {
            return db.projects.OrderBy(o => o.sort);
        }

        // GET: api/project/5
        [ResponseType(typeof(project))]
        public IHttpActionResult Getproject(int id)
        {
            project project = db.projects.Find(id);
            if (project == null)
            {
                return NotFound();
            }

            return Ok(project);
        }

        // PUT: api/project/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putproject(int id, project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != project.projectID)
            {
                return BadRequest();
            }

            db.Entry(project).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!projectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/project
        [ResponseType(typeof(project))]
        public IHttpActionResult Postproject(project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.projects.Add(project);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = project.projectID }, project);
        }

        // DELETE: api/project/5
        [ResponseType(typeof(project))]
        public IHttpActionResult Deleteproject(int id)
        {
            project project = db.projects.Find(id);
            if (project == null)
            {
                return NotFound();
            }

            db.projects.Remove(project);
            db.SaveChanges();

            return Ok(project);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool projectExists(int id)
        {
            return db.projects.Count(e => e.projectID == id) > 0;
        }
    }
}
