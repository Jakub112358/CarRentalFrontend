import {Injectable} from '@angular/core';
import {Office} from "../model/office";
import {HttpClient} from "@angular/common/http";
import {CrudService} from "./crud-service";
import {Constraints} from "./constraints";

@Injectable({
  providedIn: 'root'
})
export class OfficeService extends CrudService<Office> {

  constructor(http: HttpClient) {
    super(Constraints.OFFICE_URL, http);
  }


}
