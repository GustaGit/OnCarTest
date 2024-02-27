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

    return {
      name:simulation.name,
      lastname:simulation.lastname,
      birthdate: simulation.birthdate,
      familyIncome: simulation.familyIncome,
      documentCPF: simulation.documentCPF,
      score:900
    }
  }

  public AddSimulation(simulation: Simulation): Observable<User> {
    return this.httpClient.post<User>(`${Constants.API_BASE_URL}/${this.simulationController}`, simulation);
  }
}
