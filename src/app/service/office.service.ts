import {Injectable} from '@angular/core';
import {Office} from "../model/Office";
import {HttpClient} from "@angular/common/http";
import {CrudService} from "./CrudService";

@Injectable({
  providedIn: 'root'
})
export class OfficeService extends CrudService<Office> {

  constructor(http: HttpClient) {
    super('http://localhost:8080/api/v1/offices', http);
  }

}
