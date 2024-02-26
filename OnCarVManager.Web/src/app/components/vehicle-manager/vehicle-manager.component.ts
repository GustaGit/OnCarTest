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

  carList: Car[] = [];
  showAddCar:boolean = false;

  constructor(private carService: VehicleManagerService) { }

  ngOnInit(): void {
  this.carService.GetAllCars().subscribe((cars:Car[]) => {
    this.carList = cars;
  });
  }

  showAddCarForm(){
    this.showAddCar = !this.showAddCar;
  }

  updateCarList(cars : Car[]){
    this.carList = cars;
  }

  addCar(event:Car){
    this.showAddCarForm();
    this.carService.AddCar(event).subscribe((cars:Car[])=>{
      this.carList = cars;
      Swal.fire({
        titleText: 'Veículo adicionado com sucesso!',
        icon:'success',
        showConfirmButton: false,
        timer: 3000
      })
    })
  }
} 

