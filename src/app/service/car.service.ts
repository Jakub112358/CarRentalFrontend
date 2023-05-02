import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CrudService} from "./CrudService";
import {Car} from "../model/Car";

@Injectable({
  providedIn: 'root'
})
export class CarService extends CrudService<Car> {

  constructor(http: HttpClient) {
    super('http://localhost:8080/api/v1/cars', http);
  }


}
