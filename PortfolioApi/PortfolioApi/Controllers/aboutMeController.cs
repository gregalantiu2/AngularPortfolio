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
    public class aboutMeController : ApiController
    {
        private aboutMeModels db = new aboutMeModels();


        // GET: api/aboutMe
        public IQueryable<aboutMe> GetaboutMes()
        {
            return db.aboutMes;
        }

        // GET: api/aboutMe/5
        [ResponseType(typeof(aboutMe))]
        public IHttpActionResult GetaboutMe(int id)
        {
            
            aboutMe aboutMe = db.aboutMes.Find(id);
            if (aboutMe == null)
            {
                return NotFound();
            }

            return Ok(aboutMe);
        }

        // PUT: api/aboutMe/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutaboutMe(int id, aboutMe aboutMe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aboutMe.aboutMeID)
            {
                return BadRequest();
            }

            db.Entry(aboutMe).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!aboutMeExists(id))
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

        // POST: api/aboutMe
        [ResponseType(typeof(aboutMe))]
        public IHttpActionResult PostaboutMe(aboutMe aboutMe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.aboutMes.Add(aboutMe);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = aboutMe.aboutMeID }, aboutMe);
        }

        // DELETE: api/aboutMe/5
        [ResponseType(typeof(aboutMe))]
        public IHttpActionResult DeleteaboutMe(int id)
        {
            aboutMe aboutMe = db.aboutMes.Find(id);
            if (aboutMe == null)
            {
                return NotFound();
            }

            db.aboutMes.Remove(aboutMe);
            db.SaveChanges();

            return Ok(aboutMe);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool aboutMeExists(int id)
        {
            return db.aboutMes.Count(e => e.aboutMeID == id) > 0;
        }
    }
}
