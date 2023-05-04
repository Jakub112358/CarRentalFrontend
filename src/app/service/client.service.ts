import { Injectable } from '@angular/core';
import {CrudService} from "./CrudService";
import {Client} from "../model/Client";
import {HttpClient} from "@angular/common/http";
import {Constraints} from "./Constraints";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends CrudService<Client>{

  constructor(http: HttpClient) {
    super(Constraints.CLIENT_URL, http);
  }
}
