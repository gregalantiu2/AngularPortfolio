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
    public class resumesController : ApiController
    {
        private resumeModel db = new resumeModel();

        // GET: api/resumes
        public IQueryable<resume> Getresumes()
        {
            List<resume> resumeList = db.resumes.ToList();
            foreach(resume res in resumeList) {
               res.bullets = res.description.Split('=').ToList();
            }

            return resumeList.AsQueryable().OrderBy(o => o.sort);
        }

        // GET: api/resumes/5
        [ResponseType(typeof(resume))]
        public IHttpActionResult Getresume(int id)
        {
            resume resume = db.resumes.Find(id);
            if (resume == null)
            {
                return NotFound();
            }

            return Ok(resume);
        }

        // PUT: api/resumes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putresume(int id, resume resume)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != resume.resumeID)
            {
                return BadRequest();
            }

            db.Entry(resume).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!resumeExists(id))
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

        // POST: api/resumes
        [ResponseType(typeof(resume))]
        public IHttpActionResult Postresume(resume resume)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.resumes.Add(resume);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = resume.resumeID }, resume);
        }

        // DELETE: api/resumes/5
        [ResponseType(typeof(resume))]
        public IHttpActionResult Deleteresume(int id)
        {
            resume resume = db.resumes.Find(id);
            if (resume == null)
            {
                return NotFound();
            }

            db.resumes.Remove(resume);
            db.SaveChanges();

            return Ok(resume);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool resumeExists(int id)
        {
            return db.resumes.Count(e => e.resumeID == id) > 0;
        }
    }
}
