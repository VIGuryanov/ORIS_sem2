using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using ORIS_18._02._2023.Services;
using System;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Configuration.Get<SmtpSettings>(_con);
builder.Services.Configure<SmtpSettings>(builder.Configuration.GetSection("SmtpSettings"));

builder.Services.AddCors();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IEmailService, EmailService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(policyBuilder => policyBuilder.AllowAnyOrigin().AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Use(async (context, next) =>
{
    // Do work that can write to the Response.
    Console.WriteLine($"Got request {context.Request.Path}");
    await next.Invoke();

    Console.WriteLine($"Got request {context.Response}");

    // Do logging or other work that doesn't write to the Response.
});

app.Map("/comment", (IOptions<SmtpSettings> options) =>
{
    SmtpSettings settings = options.Value;  // получаем переданные через Options объект Person
    return settings;
});

app.Run();
