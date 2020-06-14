using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Barker.Domain
{
    public class Deliveries : Dictionary<DayOfWeek, List<DeliveryTime>>
    {
        public Deliveries()
        {
        }

        public Deliveries(IDictionary<DayOfWeek, List<DeliveryTime>> dictionary) : base(dictionary)
        {
        }

        public Deliveries(IEnumerable<KeyValuePair<DayOfWeek, List<DeliveryTime>>> collection) : base(collection)
        {
        }

        public Deliveries(IEqualityComparer<DayOfWeek> comparer) : base(comparer)
        {
        }

        public Deliveries(int capacity) : base(capacity)
        {
        }

        public Deliveries(IDictionary<DayOfWeek, List<DeliveryTime>> dictionary, IEqualityComparer<DayOfWeek> comparer) : base(dictionary, comparer)
        {
        }

        public Deliveries(IEnumerable<KeyValuePair<DayOfWeek, List<DeliveryTime>>> collection, IEqualityComparer<DayOfWeek> comparer) : base(collection, comparer)
        {
        }

        public Deliveries(int capacity, IEqualityComparer<DayOfWeek> comparer) : base(capacity, comparer)
        {
        }

        protected Deliveries(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }

    public class DeliveryTime : IEquatable<DeliveryTime>
    {
        public DayOfWeek DayOfWeek { get; set; }

        public TimeSpan Time { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as DeliveryTime);
        }

        public bool Equals(DeliveryTime other)
        {
            return other != null &&
                   DayOfWeek == other.DayOfWeek &&
                   Time.Equals(other.Time);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(DayOfWeek, Time);
        }

        public static bool operator ==(DeliveryTime left, DeliveryTime right)
        {
            return EqualityComparer<DeliveryTime>.Default.Equals(left, right);
        }

        public static bool operator !=(DeliveryTime left, DeliveryTime right)
        {
            return !(left == right);
        }
    }
}
