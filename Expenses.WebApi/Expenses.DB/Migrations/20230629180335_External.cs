using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Expenses.DB.Migrations
{
    /// <inheritdoc />
    public partial class External : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExternalId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ExternalType",
                table: "Users");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ExternalId",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ExternalType",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
