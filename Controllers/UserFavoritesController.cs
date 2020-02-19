using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using marvel_comics_app.Data;
using marvel_comics_app.Models;
using Microsoft.AspNetCore.Authorization;

namespace marvel_comics_app.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserFavoritesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserFavoritesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/UserFavorites
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserFavorites>>> GetUserFavorites()
        {
            return await _context.UserFavorites.ToListAsync();
        }

        // GET: api/UserFavorites/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserFavorites>> GetUserFavorites(Guid id)
        {
            var userFavorites = await _context.UserFavorites.FindAsync(id);

            if (userFavorites == null)
            {
                return NotFound();
            }

            return userFavorites;
        }

        // PUT: api/UserFavorites/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserFavorites(Guid id, UserFavorites userFavorites)
        {
            if (id != userFavorites.Id)
            {
                return BadRequest();
            }

            _context.Entry(userFavorites).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserFavoritesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserFavorites
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<UserFavorites>> PostUserFavorites(UserFavorites userFavorites)
        {
            _context.UserFavorites.Add(userFavorites);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserFavorites", new { id = userFavorites.Id }, userFavorites);
        }

        // DELETE: api/UserFavorites/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserFavorites>> DeleteUserFavorites(Guid id)
        {
            var userFavorites = await _context.UserFavorites.FindAsync(id);
            if (userFavorites == null)
            {
                return NotFound();
            }

            _context.UserFavorites.Remove(userFavorites);
            await _context.SaveChangesAsync();

            return userFavorites;
        }

        private bool UserFavoritesExists(Guid id)
        {
            return _context.UserFavorites.Any(e => e.Id == id);
        }
    }
}
