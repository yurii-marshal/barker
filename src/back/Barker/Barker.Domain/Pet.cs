using System;

using Barker.Core;

namespace Barker.Domain
{
	public class Pet : Entity
	{
		public string Name { get; set; }

		public int Age { get; set; }

		public long BreedId { get; set; }

        public PetSize PetSize { get; set; }

        public Gender Gender { get; set; }

        public DateTime DateOfBirth { get; set; }

		public string Image { get; set; }

		public double Weight { get; set; }

		public double PerfectWeight { get; set; }

		public Activity Activity { get; set; }

		public bool AnyPathalogies => Pathalogies.HasFlag(Pathalogy.None);

		public Pathalogy Pathalogies { get; set; } = Pathalogy.None;

		public PetFood PetFood { get; set; }

		public long DietId { get; set; }

		public long OwnerId { get; set; }

	}

    public enum PetSize
    {
        Small,
        Medium,
        Fat
    }

    public enum Gender
    {
        Male,
        Female
    }

    [Flags]
    public enum PetFood : sbyte
	{
        DryFood,
        WetFood,
        FreezedDryFood,
        HomemadeFood
	}

    [Flags]
    public enum Pathalogy : ulong
	{
        None,
        Allergy,
		GastrointestinalDiseases
	}

    public enum Activity
	{
        Little,
        Average,
        Highly
    }
}
