using System;
using System.ComponentModel.DataAnnotations;

namespace marvel_comics_app.Models
{
    public class UserFavorites
    {
        public Guid Id { get; set; }
        
        [Required]
        public string UserId { get; set; }
        
        [Required]
        public long ComicId { get; set; }
        
        public string Title { get; set; }
        public string CoverImageUrl { get; set; }
    }
}