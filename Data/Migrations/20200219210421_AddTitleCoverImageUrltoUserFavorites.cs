using Microsoft.EntityFrameworkCore.Migrations;

namespace marvel_comics_app.Data.Migrations
{
    public partial class AddTitleCoverImageUrltoUserFavorites : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CoverImageUrl",
                table: "UserFavorites",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "UserFavorites",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverImageUrl",
                table: "UserFavorites");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "UserFavorites");
        }
    }
}
