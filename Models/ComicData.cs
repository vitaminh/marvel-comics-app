using System;
using System.ComponentModel.DataAnnotations;

namespace marvel_comics_app.Models
{
    public class ComicData
    {
        public Guid Id { get; set; }
        
        [Required]
        public long ComicId { get; set; }
        
        public string Title { get; set; }
        public string CoverImageUrl { get; set; }
    }
}