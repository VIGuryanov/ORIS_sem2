namespace ORIS_18._02._2023.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string senderName, string email, string content);
    }
}
