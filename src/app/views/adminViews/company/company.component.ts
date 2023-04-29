import { Component } from '@angular/core';
import {Company} from "../../../model/Company";
import {Address} from "../../../model/Address";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  company: Company;
  address: Address;
  displayElements: string[][];

  //temporal company id. In next version it would be provided from logged user info
  companyId: 1;

  ngOnInit(){
    this.address = {
      id: 1,
      zipCode: '11-200',
      town: 'Poznań',
      street: 'ul. jakaś',
      houseNumber: '15a'
    }
    this.company = {
      id: 1,
      name: 'nazwa firmy',
      domain: 'www.strona.pl',
      address: this.address
    }

    this.displayElements=[
      ['Name', this.company.name],
      ['Domain', this.company.domain],
      ['Zip code:', this.company.address.zipCode],
      ['Town:', this.company.address.town],
      ['Street:', this.company.address.street],
      ['House number:', this.company.address.houseNumber],
    ]
  }

}
