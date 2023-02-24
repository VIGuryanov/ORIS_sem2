using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;

namespace ORIS_18._02._2023.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommentController : Controller
    {

        // POST: CommentController/Create
        [HttpPost]
        public ActionResult Create([FromForm] string senderName, [FromForm] string email, [FromForm] string content)
        {            
            var messageToSelf = new MailMessage(new MailAddress("somemail142@mail.ru", senderName), new MailAddress("somemail142@mail.ru"));
            messageToSelf.Subject = "Comment from server";
            messageToSelf.Body = $"The user with mail {email} left a comment on dog server with content: {content}";

            var messageToClient = new MailMessage(new MailAddress("somemail142@mail.ru", "Dog server team"), new MailAddress(email));
            messageToClient.Subject = "Comment from server";
            messageToClient.Body = $"Thank you for your comment!";

            var client = new SmtpClient("smtp.mail.ru", 587);
            client.Credentials = new NetworkCredential("somemail142@mail.ru", "pmwPmN1Hgh0SDd2f1TfX");
            client.EnableSsl = true;

            client.Send(messageToSelf);
            client.Send(messageToClient);

            return Ok();
        }
    }
}
