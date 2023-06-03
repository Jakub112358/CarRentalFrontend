import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {JwtTokenService} from "../../../auth/jwt-token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items:MenuItem[];

  constructor(private tokenService: JwtTokenService) {
  }

  ngOnInit(){
    this.items=[
      {label: 'home', icon: 'pi pi-home', routerLink: '/admin'},

      {label: 'company', icon: 'pi pi-globe', routerLink: 'company'},

      {label: 'offices', icon: 'pi pi-sitemap', items:[
          {label: 'office list', icon: 'pi pi-list', routerLink: 'office'},
          {label: 'add office', icon: 'pi pi-plus', routerLink: 'office/new'},
        ]
      },

      {label: 'cars', icon: 'pi pi-car', items:[
          {label: 'car list', icon: 'pi pi-list', routerLink: 'car'},
          {label: 'add car', icon: 'pi pi-plus', routerLink: 'car/new'},
        ]
      },

      {label: 'price lists', icon: 'pi pi-list', items:[
          {label: 'price lists', icon: 'pi pi-list', routerLink: 'price-list'},
          {label: 'add price list', icon: 'pi pi-plus', routerLink: 'price-list/new'},
        ]
      },

      {label: 'employees', icon: 'pi pi-users', items:[
          {label: 'employee list', icon: 'pi pi-list', routerLink: 'employee'},
          {label: 'add employee', icon: 'pi pi-plus', routerLink: 'employee/new'},
        ]
      },

      {label: 'clients', icon: 'pi pi-id-card', items:[
          {label: 'client list', icon: 'pi pi-list', routerLink: 'client'},
        ]
      },

      {label: 'reservations', icon: 'pi pi-compass', items:[
          {label: 'reservation list', icon: 'pi pi-list', routerLink: 'reservation'},
        ]
      },

      {label: 'logout', icon: 'pi pi-sign-out', command: () => this.resetToken(), routerLink: '/'}
    ];
  }

  resetToken(){
    this.tokenService.setTokenUndefined();
  }

}
