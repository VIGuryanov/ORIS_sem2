using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BurgerBuilder
{
    public interface IBurgerPart
    {
        public int Price { get;}

        public string ToString();
    }

    public interface IFryable:IBurgerPart
    {
        public bool IsFried { get; }
        public void Fry();
    }

    public interface ISauce:IBurgerPart
    {

    }

    public interface IPackage:IBurgerPart
    {
        public IBurgerPart[] Content { get; }
    }

    public interface ISeasoning:IBurgerPart
    {

    }
}
