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

  public AddCar(car:Car):Observable<Car[]>{
    return this.httpClient.post<Car[]>(`${environments.apiUrl}/${this.controllerUrl}`,car)
  }

  public RemoveCar(car:Car):Observable<Car[]>{
    return this.httpClient.delete<Car[]>(`${environments.apiUrl}/${this.controllerUrl}`, {body:car.id})
  }
}
