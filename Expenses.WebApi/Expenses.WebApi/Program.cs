using Expenses.Core;
using Expenses.DB;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.DependencyInjection;
using System.Text;

namespace Expenses.WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var connectionString = builder.Configuration.GetConnectionString("DB_CONNECTION_STRING") ?? throw new InvalidOperationException("Connection string 'DB_CONNECTION_STRING' not found.");

            builder.Services.AddDbContext<AppDbContext>(options =>
 options.UseSqlServer(connectionString));

            IServiceScopeFactory service = builder.Services.BuildServiceProvider().GetRequiredService<IServiceScopeFactory>();
            using (var db = service.CreateScope().ServiceProvider.GetService<AppDbContext>())
            {
                db.Database.Migrate();
            }

            
            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddDbContext<AppDbContext>();

            builder.Services.AddTransient<IExpensesServices, ExpensesServices>();

            builder.Services.AddTransient<IUserService, UserService>();

            builder.Services.AddTransient<IStatisticsServices, StatisticsServices>();

            builder.Services.AddTransient<IPasswordHasher, PasswordHasher>();

            builder.Services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();    
            builder.Services.AddCors(options=>
            {
                options.AddPolicy("ExpensesPolicy",
                    builder =>
                    {
                        builder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
                    });
            });



            builder.Services.ConfigureSwaggerGen(setup =>
            {
                setup.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Title = "Expenses",
                    Version = "v1"
                });
            });

            var secret = Environment.GetEnvironmentVariable("JWT_SECRET");
            var issuer = Environment.GetEnvironmentVariable("JWT_ISSUER");

            builder.Services.AddAuthentication(opts =>
            {
                opts.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opts.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            })
                .AddJwtBearer(opts =>
                {
                    opts.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = issuer,
                        ValidateAudience = false,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secret))
                    };
                });
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            
            
            var app = builder.Build();
            
            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseHttpsRedirection();
            app.UseCors("ExpensesPolicy");
            app.UseAuthentication();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}