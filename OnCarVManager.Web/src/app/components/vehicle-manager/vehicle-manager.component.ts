import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-vehicle-manager',
  templateUrl: './vehicle-manager.component.html',
  styleUrls: ['./vehicle-manager.component.css']
})


export class VehicleManagerComponent implements OnInit {

  constructor(private carService: VehicleManagerService) { }

  $heroesList: any;

  car: Car = {
    brand : "Chevrolet",
    model : "Ranger 2013",
    color : "Preta"
  }
 

  ngOnInit(): void {
    // this.carService.GetAllCars().subscribe((car:Car[])=>{
    //   console.log(car);
    // });
    
    // this.carService.GetCarById(2).subscribe((car:Car) =>{
    //   console.log(car);
    // });

    // this.carService.AddCar(this.car).subscribe((response:string) =>{
    //   console.log(response);
    // })
    
    // this.carService.RemoveCar(17).subscribe((response:string) => {
    //   console.log(response);
    // })
  }
} import { VehicleManagerService } from 'src/app/services/vehicle-manager/vehicle-manager.service';

