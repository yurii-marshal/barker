using System;
using System.Collections.Generic;
using Barker.Core;

namespace Barker.Domain
{
    public class User : Entity
    {
		public string UserName { get; set; }

		public string Phone { get; set; }

		public string Email { get; set; }

		public bool Active { get; set; }

		public long SubscriptionId { get; set; }

        public string PaymentToken { get; set; }

        public IList<long> PetsId { get; set; }
    }
}
