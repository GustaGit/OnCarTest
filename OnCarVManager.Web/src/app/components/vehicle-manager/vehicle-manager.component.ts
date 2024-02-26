import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Car } from 'src/app/models/car';
import { VehicleManagerService } from 'src/app/services/vehicle-manager/vehicle-manager.service';
import Swal from 'sweetalert2';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

@Component({
  selector: 'app-vehicle-manager',
  templateUrl: './vehicle-manager.component.html',
  styleUrls: ['./vehicle-manager.component.css']
})

export class VehicleManagerComponent implements OnInit {

  @ViewChild(CustomModalComponent, { static: true })
  customModal: CustomModalComponent = new CustomModalComponent; 

  carList: Car[] = [];
  showAddCar: boolean = false;

  constructor(private carService: VehicleManagerService) { }

  ngOnInit(): void {
    this.carService.GetAllCars().subscribe((cars: Car[]) => {
      this.carList = cars;
    });
  }

  public ShowAddCarForm() {
    this.showAddCar = !this.showAddCar;
  }

  public UpdateCarList(cars: Car[]) {
    this.carList = cars;
  }

  public RemoveCar(car: Car) {
    Swal.fire({
      iconHtml: ` <i class="bi bi-trash"></i>  `,
      iconColor: 'red',
      title: "Quer mesmo deletar este item?",
      text: `${car.model} ${car.brand} ${car.color}`,
      showCancelButton: true,
      confirmButtonText: "Sim",
      confirmButtonColor: 'gray',
      cancelButtonColor: 'red',
      cancelButtonText: "Não"
    }).then((result) => {
      if (result.isConfirmed)
        this.carService.RemoveCar(car).subscribe((cars: Car[]) => {
          this.carList = cars;
          Swal.fire({titleText:'Removido!', showConfirmButton: false, timer:1500, icon:'success'});
        })
    });
  }

  public OpenModal(){
    this.customModal.toggle();
  }

}

