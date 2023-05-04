import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "../model/Company";
import {CrudService} from "./CrudService";
import {Constraints} from "./Constraints";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends CrudService<Company> {


  constructor(http: HttpClient) {
    super(Constraints.COMPANY_URL, http)
  }

}
