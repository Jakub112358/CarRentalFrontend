import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "../model/Company";
import {CrudService} from "./CrudService";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends CrudService<Company> {


  constructor(http: HttpClient) {
    super('http://localhost:8080/api/v1/companies', http)
  }

}