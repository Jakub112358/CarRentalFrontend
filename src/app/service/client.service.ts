import {Injectable} from '@angular/core';
import {CrudService} from "./crud-service";
import {Client} from "../model/client";
import {HttpClient} from "@angular/common/http";
import {ApiConstraints} from "../config/apiConstraints";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends CrudService<Client> {

  constructor(http: HttpClient) {
    super(ApiConstraints.CLIENT_URL, http);
  }
}
