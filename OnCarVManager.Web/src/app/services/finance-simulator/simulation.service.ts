import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Simulation } from 'src/app/models/simulation';
import { Constants } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private simulationController: string = "Simulation";

  constructor(private httpClient: HttpClient) { }

  public AddSimulationTest(simulation:Simulation): User{

    //TODO: Serviço funcionar
    return {
      documentCPF: simulation.documentCPF,
      email: simulation.email,
      phone:simulation.phone,
      birthdate: simulation.birthdate,
      familyIncome: simulation.familyIncome,
      carPrice:50000,
      score:500
    }
  }

  public AddSimulation(simulation: Simulation): Observable<User> {
    return this.httpClient.post<User>(`${Constants.API_BASE_URL}/${this.simulationController}`, simulation);
  }
}
