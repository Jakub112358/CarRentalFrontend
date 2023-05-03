import {Component} from '@angular/core';
import {Employee} from "../../../../model/Employee";
import {EmployeeService} from "../../../../service/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees: Employee[];


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    })
  }
}
