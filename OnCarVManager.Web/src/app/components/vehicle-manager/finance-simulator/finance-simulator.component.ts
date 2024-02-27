import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { Simulation } from 'src/app/models/simulation';
import { User } from 'src/app/models/user';
import { SimulationService } from 'src/app/services/finance-simulator/simulation.service';

@Component({
  selector: 'app-finance-simulator',
  templateUrl: './finance-simulator.component.html',
  styleUrls: ['./finance-simulator.component.css']
})
export class FinanceSimulatorComponent {

  @Input() car:Car = new Car();

  formFinanceSimulator: FormGroup;
  userSimulation: User = new User();
 

  constructor(private fb: FormBuilder, private simulationService : SimulationService) {
    this.formFinanceSimulator = this.fb.group({
      documentCPF: ['', [Validators.required, Validators.minLength(11)]],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      birthdate: ['', Validators.required],
      familyIncome: ['', Validators.required]
    })
  }

  public Simulate() {
    if (!this.formFinanceSimulator.valid) return;

    var simulation: Simulation = this.formFinanceSimulator.value;
    simulation.price = this.car.price;
    this.simulationService.AddSimulation(simulation).subscribe((response:User)=>this.userSimulation = response);
  }
}
