using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace marvel_comics_app.Data.Migrations
{
    public partial class AddComicData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ComicData",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ComicId = table.Column<long>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    CoverImageUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ComicData", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ComicData");
        }
    }
}
