using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using ORIS_18._02._2023.Services;
using System.Net;
using System.Net.Mail;

namespace ORIS_18._02._2023.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommentController : Controller
    {
        IEmailService emailService;
        string serviceMail;

        public CommentController(IEmailService emailService, IOptions<SmtpSettings> emailConfig) 
        { 
            this.emailService = emailService;
            serviceMail = emailConfig.Value.ServerMailLogin;
        }

        // POST: CommentController/Create
        [HttpPost]
        public async Task<ActionResult> Create([FromForm] string senderName, [FromForm] string email, [FromForm] string content)
        { 
            //try
            //{
                await emailService.SendEmailAsync("ServerComment", serviceMail, $"The user with mail {email} and name {senderName} left a comment on dog server with content: {content}");
                await emailService.SendEmailAsync("Dog server team", email, $"{senderName}, thank you for your comment!");
                return Ok();
            //}
            /*catch (Exception ex)
            {
                return StatusCode(500, ex);
            }*/
        }
    }
}
