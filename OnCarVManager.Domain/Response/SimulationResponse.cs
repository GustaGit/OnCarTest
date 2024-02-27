namespace OnCarVManager.Domain.Response
{
    public class SimulationResponse
    {
        public int DocumentCPF { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime Birthdate { get; set; }
        public int FamilyIncome { get; set; }
        public int CarPrice { get;set; }
        public int Score { get; set; }
    }
}
