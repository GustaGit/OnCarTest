import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Car } from 'src/app/models/car';
import { VehicleManagerService } from 'src/app/services/vehicle-manager/vehicle-manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle-manager',
  templateUrl: './vehicle-manager.component.html',
  styleUrls: ['./vehicle-manager.component.css']
})

export class VehicleManagerComponent implements OnInit {
  
  showAddCar:boolean = false;
  carList$: Observable<Car[]> = new Observable;

  constructor(private carService: VehicleManagerService) { }

  ngOnInit(): void {
  this.carList$ = this.carService.GetAllCars();
  }

  showAddCarForm(){
    this.showAddCar = !this.showAddCar;
  }

  addCar(event:Car){
    this.showAddCarForm();
    this.carService.AddCar(event).subscribe((response:string)=>{
      Swal.fire({
        titleText: `${response}`,
        icon:'success',
        showConfirmButton: false,
        timer: 3000
      })
    })

  }
} 

