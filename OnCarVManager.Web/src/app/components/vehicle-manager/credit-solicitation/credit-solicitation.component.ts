import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-solicitation',
  templateUrl: './credit-solicitation.component.html',
  styleUrls: ['./credit-solicitation.component.css']
})
export class CreditSolicitationComponent {
  creditSolicitationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.creditSolicitationForm = this.fb.group({
      
    })
  }

  public ConfirmClick() {
    throw new Error('Method not implemented.');
  }
}
