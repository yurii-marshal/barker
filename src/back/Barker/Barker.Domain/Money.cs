using System;
using System.Collections.Generic;

using Barker.Core;

namespace Barker.Domain
{
    public class Money : ValueObject
    {
        public string Currency { get; }

        public decimal Amount { get; }

        public Money(string currency, decimal amount)
        {
            Currency = currency;
            Amount = amount;
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Currency.ToUpper();
            yield return Math.Round(Amount, 2);
        }
    }
}
