import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleManagerComponent } from './vehicle-manager.component';
import { CreditSolicitationComponent } from './credit-solicitation/credit-solicitation.component';
import { FinanceSimulatorComponent } from './finance-simulator/finance-simulator.component';
import { VehicleManagerService } from 'src/app/services/vehicle-manager/vehicle-manager.service';
import { FinanceSimulatorService } from 'src/app/services/vehicle-manager/finance-simulator.service';
import { AddCarFormComponent } from './add-car-form/add-car-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VehicleManagerComponent,
    CreditSolicitationComponent,
    FinanceSimulatorComponent,
    AddCarFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
   providers: [
    VehicleManagerService,
    FinanceSimulatorService
  ],
  exports:[
    VehicleManagerComponent
  ]
})
export class VehicleManagerModule { }
