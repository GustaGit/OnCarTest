using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnCarVManager.Domain.Aggregates
{
    public class Car 
    {
        public int id { get; set; }
        public string model { get; set; }
        public string brand { get; set; }
        public string color { get; set; }
        public int price { get; set; }

    }
}
