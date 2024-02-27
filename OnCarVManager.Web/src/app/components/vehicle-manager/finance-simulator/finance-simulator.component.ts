import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Simulation } from 'src/app/models/simulation';
import { User } from 'src/app/models/user';
import { SimulationService } from 'src/app/services/finance-simulator/simulation.service';

@Component({
  selector: 'app-finance-simulator',
  templateUrl: './finance-simulator.component.html',
  styleUrls: ['./finance-simulator.component.css']
})
export class FinanceSimulatorComponent {

  formFinanceSimulator: FormGroup;
  userSimulation: User = new User();
  userTest: User = {
    name: "Alberto",
    lastname: "Vieira",
    documentCPF: 46569620827,
    birthdate: new Date(),
    familyIncome: 4500,
    score: 999
  }

  constructor(private fb: FormBuilder, private simulationService : SimulationService) {
    this.formFinanceSimulator = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      familyIncome: ['', Validators.required],
      documentCPF: ['', [Validators.required, Validators.minLength(11)]]
    })
  }

  public Simulate() {
    if (!this.formFinanceSimulator.valid) return;

    var simulation: Simulation = this.formFinanceSimulator.value;
    this.userSimulation = this.simulationService.AddSimulationTest(simulation);
    console.log(this.userSimulation)
  }
}
