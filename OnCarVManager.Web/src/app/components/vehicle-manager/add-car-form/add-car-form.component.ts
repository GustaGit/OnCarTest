import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent {

  @Output() addCarEmmiter = new EventEmitter();
  addCarForm: FormGroup;


  constructor() {
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
    this.addCarEmmiter.emit(car);
  }
  
}
