import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Simulation } from 'src/app/models/simulation';

@Component({
  selector: 'app-finance-simulator',
  templateUrl: './finance-simulator.component.html',
  styleUrls: ['./finance-simulator.component.css']
})
export class FinanceSimulatorComponent {

  formFinanceSimulator: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formFinanceSimulator = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      familyIncome: ['', Validators.required]
    })
  }

  public Simulate() {
    if (!this.formFinanceSimulator.valid) return;

    var simulation: Simulation = this.formFinanceSimulator.value;
  }
}
