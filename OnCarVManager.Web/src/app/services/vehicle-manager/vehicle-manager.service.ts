import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { environments } from '../../environments/environments'


@Injectable({
  providedIn: 'root'
})

export class VehicleManagerService {
  private controllerUrl:string = "Car";

  constructor(private httpClient: HttpClient) { }

  public GetAllCars():Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${environments.apiUrl}/${this.controllerUrl}`) 
  }

  public GetCarById(carId : number):Observable<Car>{
    return this.httpClient.get<Car>(`${environments.apiUrl}/${this.controllerUrl}/${carId}`)
  }

  public AddCar(car:Car):Observable<string>{
    return this.httpClient.post(`${environments.apiUrl}/${this.controllerUrl}`,car, {responseType: 'text'})
  }

  public RemoveCar(carId:number):Observable<string>{
    return this.httpClient.delete(`${environments.apiUrl}/${this.controllerUrl}`, {body:carId ,responseType:'text'})
  }
}
