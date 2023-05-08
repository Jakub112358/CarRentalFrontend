import { Injectable } from '@angular/core';
import {CrudService} from "./crud-service";
import {Client} from "../model/client";
import {HttpClient} from "@angular/common/http";
import {Constraints} from "./constraints";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends CrudService<Client>{

  constructor(http: HttpClient) {
    super(Constraints.CLIENT_URL, http);
  }
}
