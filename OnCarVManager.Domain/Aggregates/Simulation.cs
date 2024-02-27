namespace OnCarVManager.Domain.Aggregates
{
    public class Simulation
    {
        public int? Id {get; set;}
        public int DocumentCPF { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
        public DateTime Birthdate { get; set; }
        public int FamilyIncome { get; set; }
        public int Price{ get; set; }
    }
}
