// See https://aka.ms/new-console-template for more information
using BurgerBuilder;
using System.Text;

var bur = new ConcreteBuilder();
bur.AddBottomBun();
bur.AddCotlet();
bur.AddKetchup();
bur.AddCheese();
bur.AddPepper();
bur.AddTomato();
bur.AddTopBun();
bur.FryLast();
bur.PackPapperBag();
bur.PackPapperBag();

var res = bur.GetResult();
Console.WriteLine(res);
Console.WriteLine($"Total price {res.GetPrice()}");

class TopBun : IFryable
{
    public TopBun() { }

    public int Price { get; private set; } = 12;

    public bool IsFried { get; private set; } = false;

    public void Fry()
    {
        IsFried = true;
        Price += 2;
    }

    public override string ToString() => $"Top bun {(IsFried ? "(Fried)" : "")} with cost {Price}";
}
class MiddleBun : IFryable
{
    public MiddleBun() { }

    public int Price { get; private set; } = 10;

    public bool IsFried { get; private set; } = false;

    public void Fry()
    {
        IsFried = true;
        Price += 2;
    }

    public override string ToString() => $"Middle bun {(IsFried ? "(Fried)" : "")} with cost {Price}";
}
class BottomBun : IFryable
{
    public BottomBun() { }

    public int Price { get; private set; } = 12;

    public bool IsFried { get; private set; } = false;

    public void Fry()
    {
        IsFried = true;
        Price += 2;
    }

    public override string ToString() => $"Bottom bun {(IsFried ? "(Fried)" : "")} with cost {Price}";
}
class Ketchup : ISauce
{
    public Ketchup() { }

    public int Price => 5;

    public override string ToString() => $"Ketchup with cost {Price}";
}

class Mustard : ISauce
{
    public Mustard() { }

    public int Price => 5;

    public override string ToString() => $"Mustard with cost {Price}";
}

class Tomato : IBurgerPart
{
    public Tomato() { }

    public int Price => 8;

    public override string ToString() => $"Tomato with cost {Price}";
}
class Salad : IBurgerPart
{
    public Salad() { }

    public int Price => 3;

    public override string ToString() => $"Salad with cost {Price}";
}

class Cheese : IFryable
{
    public Cheese() { }

    public int Price => 10;

    public bool IsFried { get; private set; } = false;

    public void Fry()
    {
        IsFried = true;
    }

    public override string ToString() => $"Cheese {(IsFried ? "(Fried)" : "")} with cost {Price}";
}

class Cotlet : IFryable
{
    public Cotlet() { }

    public int Price { get; private set; } = 15;

    public bool IsFried { get; private set; } = false;

    public void Fry()
    {
        IsFried = true;
        Price += 4;
    }

    public override string ToString() => $"Cotlet {(IsFried ? "(Fried)" : "")} with cost {Price}";
}

class Pepper : ISeasoning
{
    public int Price => 6;

    public Pepper() { }

    public override string ToString() => $"Pepper with cost {Price}";
}

class PaperBag : IPackage
{
    public IBurgerPart[] Content { get; }

    public int Price { get; }

    public PaperBag(List<IBurgerPart> content, int contentPrice)
    {
        Content = content.ToArray();
        Price = contentPrice += 5;
    }

    public override string ToString()
    {
        var sBuilder = new StringBuilder($"Paper bag with content (Price with content: {Price}):\n(");
        foreach (var i in Content)
            sBuilder.Append("\n" + i.ToString());

        sBuilder.Append("\n)");
        return sBuilder.ToString();
    }
}

class Burger
{
    public List<IBurgerPart> Parts = new();

    public void Add(IBurgerPart part)
    {
        Parts.Add(part);
    }

    public int GetPrice()
    {
        var price = 0;
        foreach (var part in Parts)
            price += part.Price;

        return price;
    }

    public override string ToString()
    {
        var sBuilder = new StringBuilder("Burger consist of:\n(");
        foreach (var i in Parts)
            sBuilder.Append("\n" + i.ToString());
        sBuilder.Append("\n)");
        return sBuilder.ToString();
    }
}

abstract class Builder
{
    public abstract void AddTopBun();
    public abstract void AddMiddleBun();
    public abstract void AddBottomBun();
    public abstract void AddKetchup();
    public abstract void AddMustard();
    public abstract void AddTomato();
    public abstract void AddCheese();
    public abstract void AddCotlet();
    public abstract void AddPepper();
    public abstract void PackPapperBag();
    public abstract void FryLast();
    public abstract Burger GetResult();
}

class ConcreteBuilder : Builder
{
    Burger burger = new Burger();

    public override Burger GetResult()
    {
        return burger;
    }

    public override void AddTopBun()
    {
        burger.Add(new TopBun());
    }

    public override void AddMiddleBun()
    {
        burger.Add(new MiddleBun());
    }

    public override void AddBottomBun()
    {
        burger.Add(new BottomBun());
    }

    public override void AddKetchup()
    {
        burger.Add(new Ketchup());
    }

    public override void AddMustard()
    {
        burger.Add(new Mustard());
    }

    public override void AddTomato()
    {
        burger.Add(new Tomato());
    }

    public override void AddCheese()
    {
        burger.Add(new Cheese());
    }

    public override void AddCotlet()
    {
        burger.Add(new Cotlet());
    }

    public override void AddPepper()
    {
        burger.Add(new Pepper());
    }

    public override void PackPapperBag()
    {
        burger.Parts = new List<IBurgerPart>() { new PaperBag(burger.Parts, burger.GetPrice()) };
    }

    public override void FryLast()
    {
        if (burger.Parts.Count == 0)
        {
            Console.WriteLine("Nothing to fry");
            return;
        }
        if (burger.Parts.Last() is IFryable part)
            part.Fry();
        else
            Console.WriteLine($"Impossible to fry {burger.Parts.Last().ToString()}");
    }
}