import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CrudService} from "./CrudService";
import {Employee} from "../model/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends CrudService<Employee>{

  constructor(http: HttpClient) {
    super('http://localhost:8080/api/v1/employees', http)
  }
}
