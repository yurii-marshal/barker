using System;
using System.Collections.Generic;

using Barker.Core;

namespace Barker.Domain
{
    public class Diet : Entity
	{
		public string Name { get; set; }

		public List<Ingredients> Ingredients { get; set; }
	}
}
