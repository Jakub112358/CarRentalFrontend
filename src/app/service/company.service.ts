import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "../model/company";
import {CrudService} from "./crud-service";
import {ApiConstraints} from "../config/apiConstraints";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends CrudService<Company> {

  constructor(http: HttpClient) {
    super(ApiConstraints.COMPANY_URL, http)
  }

}
