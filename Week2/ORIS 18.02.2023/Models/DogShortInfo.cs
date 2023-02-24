namespace ORIS_18._02._2023.Models
{
    public class DogShortInfo
    {
        public Guid Id { get; set; }
        public string FamilyName { get; set; }
        public string ImgUrl { get; set; }

        public DogShortInfo(Guid guid, string fName, string imgURL)
        {
            Id= guid;
            FamilyName= fName;
            ImgUrl= imgURL;
        }
    }
}
