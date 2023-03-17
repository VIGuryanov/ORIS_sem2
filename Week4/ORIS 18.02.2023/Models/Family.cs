namespace ORIS_18._02._2023.Models
{
    public class Family
    {
        public string Name { get; set; }
        public int MinHeight { get;set;}
        public int MaxHeight { get;set;}
        public int MinWeight { get;set;}
        public int MaxWeight { get;set;}
        public int MinLifeTime { get;set;}
        public int MaxLifeTime { get;set;}

        public Family(string name, int minH, int maxH, int minW, int maxW, int minLT, int maxLT)
        {
            Name = name;
            MinHeight = minH;
            MaxHeight = maxH;
            MinWeight = minW;
            MaxWeight = maxW;
            MinLifeTime = minLT;
            MaxLifeTime = maxLT;
        }
    }
}
