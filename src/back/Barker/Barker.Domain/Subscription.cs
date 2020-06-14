using System;

using Barker.Core;

namespace Barker.Domain
{
    public class Subscription : Entity
    {
		public string Name { get; set; }

		public string Description { get; set; }

        public int ReceiptId { get; set; }

        public Money Price { get; set; }

		public TimeSpan Period { get; set; }

		public Address Address { get; set; }

		public bool Active { get; set; }

		public DayOfWeek OrderDeliveryDay { get; set; }

		public DateTimeOffset OrderDeliveryTime { get; set; }
	}
}
