import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent {
  items:MenuItem[];

  ngOnInit(){
    this.items=[
      {label: 'home', icon: 'pi pi-home', routerLink: '/client'},
      {label: 'reservations', icon: 'pi pi-car', items:[
          {label: 'reservation list', icon: 'pi pi-list', routerLink: 'reservation'},
          {label: 'new reservation', icon: 'pi pi-plus', routerLink: 'reservation/new'},
        ]
      },
    ];
  }
}
