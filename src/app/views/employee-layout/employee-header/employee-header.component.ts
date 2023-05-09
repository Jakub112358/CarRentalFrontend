import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.scss']
})
export class EmployeeHeaderComponent {
  items:MenuItem[];

  ngOnInit(){
    this.items=[
      {label: 'home', icon: 'pi pi-home', routerLink: '/employee'},
      {label: 'pick-ups', icon: 'pi pi-car', routerLink: '/employee/pickup'},
      {label: 'returns', icon: 'pi pi-car', routerLink: '/employee/return'},
      {label: 'logout', icon: 'pi pi-sign-out', routerLink: '/'},
    ];
  }
}
