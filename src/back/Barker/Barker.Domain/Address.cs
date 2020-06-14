using System.Collections.Generic;

using Barker.Core;

namespace Barker.Domain
{
    public class Address : ValueObject
    {
        public string Street { get; }

        public string City { get; }

        public string AddressDetails { get; set; }

        public Address(string street, string city, string addressDetails)
        {
            Street = street;
            City = city;
            AddressDetails = addressDetails;
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Street;
            yield return City;
        }
    }
}
