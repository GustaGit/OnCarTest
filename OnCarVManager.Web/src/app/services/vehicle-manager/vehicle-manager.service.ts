import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { Constants } from '../constants';


@Injectable({
  providedIn: 'root'
})

export class VehicleManagerService {
  private controllerUrl:string = "Car";

  constructor(private httpClient: HttpClient) { }

  public GetAllCars():Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${Constants.API_BASE_URL}/${this.controllerUrl}`) 
  }

  public GetCarById(carId : number):Observable<Car>{
    return this.httpClient.get<Car>(`${Constants.API_BASE_URL}/${this.controllerUrl}/${carId}`)
  }

  public AddCar(car:Car):Observable<Car[]>{
    return this.httpClient.post<Car[]>(`${Constants.API_BASE_URL}/${this.controllerUrl}`,car)
  }

  public RemoveCar(car:Car):Observable<Car[]>{
    return this.httpClient.delete<Car[]>(`${Constants.API_BASE_URL}/${this.controllerUrl}`, {body:car.id})
  }
}
