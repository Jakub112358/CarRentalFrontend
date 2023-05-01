import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items:MenuItem[];
  ngOnInit(){
    this.items=[
      {label: 'home', icon: 'pi pi-home', routerLink: '/admin'},

      {label: 'company', icon: 'pi pi-pencil', routerLink: 'company'},

      {label: 'office', icon: 'pi pi-list', items:[
          {label: 'office list', icon: 'pi pi-list', routerLink: 'office'},
          {label: 'add office', icon: 'pi pi-plus', routerLink: 'office/new'},
        ]
      }
    ];
  }

}
