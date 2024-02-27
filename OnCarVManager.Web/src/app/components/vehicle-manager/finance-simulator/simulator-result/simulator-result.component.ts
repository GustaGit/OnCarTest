import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SimulatorConstants } from './constants/simulator-constants';


@Component({
  selector: 'app-simulator-result',
  templateUrl: './simulator-result.component.html',
  styleUrls: ['./simulator-result.component.css']
})
export class SimulatorResultComponent implements OnInit {
  @Input() user: User = new User();
  installmentsPossibleTemplate: string[] = [];
  downPaymentValue: string = '';
  carValueTest: number = 0;
  showInstallments: boolean = true;


  constructor(private constants: SimulatorConstants) {
  }

  ngOnInit(): void {
    // Car value para teste
    this.carValueTest = 50000;
    this.downPaymentValue = this.SetDownPaymentValue(this.carValueTest, this.user);
    this.InstallmentsPossibleStrings(this.carValueTest,this.user);
  }

  public SetPercentageFromScore(score: number): number[] {
    if (score >= 1 && score <= 299) return [100, 0];
    if (score >= 300 && score <= 599) return [70, 30];
    if (score >= 600 && score <= 799) return [50, 25];
    if (score >= 800 && score <= 950) return [30, 20];
    if (score >= 951 && score <= 999) return [0, 100];
    return [];
  }

  public SetDownPaymentValue(carValue: number, user: User): string {
    let percentage = this.SetPercentageFromScore(user.score)[0];
    if (percentage == undefined) return this.constants.ERROR_MESSAGE;
    if (percentage == 100) {
      this.showInstallments = !this.showInstallments;
      return this.constants.REPROVED_MESSAGE;
    }
    if (percentage == 0)
      return this.constants.FULL_FINANCE_MESSAGE;
    return ('R$' + ((carValue * percentage) / 100));
  }

  public InstallmentsPossibleStrings(carValue: number, user:User): string[] {
    let installmentsPossible = this.GetInstallmentsPossible(user, carValue);
    let valuePayInstallment: number;
    installmentsPossible.forEach((installment) => {
      valuePayInstallment = (carValue / installment);
      this.installmentsPossibleTemplate.push(`${installment}x de R$${valuePayInstallment.toFixed(2)}`)
    })
    return this.installmentsPossibleTemplate;
  }

  public GetInstallmentsPossible(user:User,carValue:number): number[] {
    let percentageLimit = this.SetPercentageFromScore(user.score)[1];
    if (percentageLimit == 100) return this.constants.INSTALLMENTS; 
    let payFinanceLimit = ((percentageLimit * user.familyIncome) / 100);
    return this.constants.INSTALLMENTS.filter((installment) => ((carValue / installment) < payFinanceLimit));
  }


}
