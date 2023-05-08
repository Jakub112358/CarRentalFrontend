import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "../model/company";
import {CrudService} from "./crud-service";
import {Constraints} from "./constraints";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends CrudService<Company> {


  constructor(http: HttpClient) {
    super(Constraints.COMPANY_URL, http)
  }

}
