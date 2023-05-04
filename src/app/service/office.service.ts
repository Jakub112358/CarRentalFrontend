import {Injectable} from '@angular/core';
import {Office} from "../model/Office";
import {HttpClient} from "@angular/common/http";
import {CrudService} from "./CrudService";
import {Constraints} from "./Constraints";

@Injectable({
  providedIn: 'root'
})
export class OfficeService extends CrudService<Office> {

  constructor(http: HttpClient) {
    super(Constraints.OFFICE_URL, http);
  }

}
