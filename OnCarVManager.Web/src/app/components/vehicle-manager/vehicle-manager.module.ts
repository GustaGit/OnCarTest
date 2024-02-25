import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleManagerComponent } from './vehicle-manager.component';
import { CreditSolicitationComponent } from './credit-solicitation/credit-solicitation.component';
import { FinanceSimulatorComponent } from './finance-simulator/finance-simulator.component';
import { VehicleManagerService } from 'src/app/services/vehicle-manager/vehicle-manager.service';
import { FinanceSimulatorService } from 'src/app/services/vehicle-manager/finance-simulator.service';



@NgModule({
  declarations: [
    VehicleManagerComponent,
    CreditSolicitationComponent,
    FinanceSimulatorComponent
  ],
  imports: [
    CommonModule
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
