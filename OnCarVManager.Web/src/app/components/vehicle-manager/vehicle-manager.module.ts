import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleManagerComponent } from './vehicle-manager.component';
import { CreditSolicitationComponent } from './credit-solicitation/credit-solicitation.component';
import { FinanceSimulatorComponent } from './finance-simulator/finance-simulator.component';
import { VehicleManagerService } from 'src/app/services/vehicle-manager/vehicle-manager.service';
import { AddCarFormComponent } from './add-car-form/add-car-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { SimulationService } from 'src/app/services/finance-simulator/simulation.service';
import { SimulatorResultComponent } from './finance-simulator/simulator-result/simulator-result.component';
import { SimulatorConstants } from './finance-simulator/simulator-result/constants/simulator-constants';



@NgModule({
  declarations: [
    VehicleManagerComponent,
    CreditSolicitationComponent,
    FinanceSimulatorComponent,
    AddCarFormComponent,
    CustomModalComponent,
    SimulatorResultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
   providers: [
    VehicleManagerService,
    SimulationService,
    SimulatorConstants
  ],
  exports:[
    VehicleManagerComponent
  ]
})
export class VehicleManagerModule { }
