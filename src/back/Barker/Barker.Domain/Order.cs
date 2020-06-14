using System;

using Barker.Core;

namespace Barker.Domain
{
    public class Order : Entity
    {

	}

	public class OrderItem : Entity
	{
        public OrderItem(string name, long quantity, Money price)
        {
            Name = name;
            Quantity = quantity;
            Price = price;
        }

        public string Name { get; }

		public long Quantity { get; }

		public Money Price { get; }
	}
}
