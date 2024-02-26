import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { VehicleManagerService } from 'src/app/services/vehicle-manager/vehicle-manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent {

  @Output() addCarEmmiter = new EventEmitter();
  @Output() closeAddCarFormEmmiter = new EventEmitter();
  addCarForm: FormGroup;


  constructor(private carService: VehicleManagerService) {
    this.addCarForm = new FormGroup({
      model: new FormControl(null, [Validators.required]),
      brand: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required])
    })
  }

  public ConfirmClick() {
    if (!this.addCarForm.valid) return;

    var car: Car = this.addCarForm.value;
    this.addCarForm.reset();

    this.carService.AddCar(car).subscribe((cars: Car[]) => {
      this.addCarEmmiter.emit(cars);
      this.closeAddCarFormEmmiter.emit();
      Swal.fire({
        titleText: 'Veículo adicionado com sucesso!',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000
      })
    })
  }
}
