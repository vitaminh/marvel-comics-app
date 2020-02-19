using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using marvel_comics_app.Data;
using marvel_comics_app.Models;

namespace marvel_comics_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComicDataController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ComicDataController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ComicData
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ComicData>>> GetComicData()
        {
            return await _context.ComicData.ToListAsync();
        }

        // GET: api/ComicData/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ComicData>> GetComicData(Guid id)
        {
            var comicData = await _context.ComicData.FindAsync(id);

            if (comicData == null)
            {
                return NotFound();
            }

            return comicData;
        }

        // PUT: api/ComicData/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComicData(Guid id, ComicData comicData)
        {
            if (id != comicData.Id)
            {
                return BadRequest();
            }

            _context.Entry(comicData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComicDataExists(id))
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

        // POST: api/ComicData
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ComicData>> PostComicData(ComicData comicData)
        {
            _context.ComicData.Add(comicData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComicData", new { id = comicData.Id }, comicData);
        }

        // DELETE: api/ComicData/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ComicData>> DeleteComicData(Guid id)
        {
            var comicData = await _context.ComicData.FindAsync(id);
            if (comicData == null)
            {
                return NotFound();
            }

            _context.ComicData.Remove(comicData);
            await _context.SaveChangesAsync();

            return comicData;
        }

        private bool ComicDataExists(Guid id)
        {
            return _context.ComicData.Any(e => e.Id == id);
        }
    }
}
