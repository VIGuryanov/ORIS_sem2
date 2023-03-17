using Microsoft.Extensions.Options;
using System.Net.Mail;
using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace ORIS_18._02._2023.Services
{
    public class SmtpSettings
    {
        public string SMTPServerAddress { get; set; }
        public int SMTPServerPort { get; set; }
        public bool EnableSSL { get; set; }
        public string ServerMailLogin { get; set; }
        public string ServerMailPassword { get; set; }
    }

    public class EmailService : IEmailService
    {
        private readonly SmtpSettings smtpConfig;

        public EmailService(IOptions<SmtpSettings> emailConfig)
        {
            smtpConfig = emailConfig.Value;
            Console.WriteLine($"{smtpConfig.SMTPServerAddress}, {smtpConfig.SMTPServerPort}, {smtpConfig.ServerMailLogin}, {smtpConfig.ServerMailPassword}");
        }

        public async Task SendEmailAsync(string senderName, string sendTo, string content)
        {
            try
            {
                var messageToSelf = new MailMessage(new MailAddress(smtpConfig.ServerMailLogin, senderName), new MailAddress(sendTo));
                messageToSelf.Subject = "Comment from server";
                messageToSelf.Body = content;

                var client = new SmtpClient(smtpConfig.SMTPServerAddress, smtpConfig.SMTPServerPort);
                client.Credentials = new NetworkCredential(smtpConfig.ServerMailLogin, smtpConfig.ServerMailPassword);
                client.EnableSsl = true;

                await client.SendMailAsync(messageToSelf);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
