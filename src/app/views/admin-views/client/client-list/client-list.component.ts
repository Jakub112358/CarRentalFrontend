import { Component } from '@angular/core';
import {Client} from "../../../../model/client";
import {ClientService} from "../../../../service/client.service";
import {Address} from "../../../../model/address";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {
  clients: Client[];
  constructor(private clientService: ClientService) {
  }
  ngOnInit() {
    this.clientService.findAll().subscribe(data => {
      this.clients = data;
    })
  }
  addressToString(address: Address){
    return address.street + ' ' + address.houseNumber + ', ' + address.zipCode + ' ' + address.town;
  }
}
