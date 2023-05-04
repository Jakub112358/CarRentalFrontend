import {Component} from '@angular/core';
import {PanelElement} from "../../../model/templateElements/PanelElement";
import {Employee} from "../../../model/Employee";
import {EmployeeService} from "../../../service/employee.service";
import {OfficeService} from "../../../service/office.service";
import {Office} from "../../../model/Office";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  elements: PanelElement[];
  employees: Employee[];
  offices: Office[];


  constructor(private employeeService: EmployeeService,
              private officeService: OfficeService) {
  }

  ngOnInit() {
    this.loadDataAndCreatePanels()
  }

  private loadPanelElements() {
    this.elements = [];
    this.addManagerCheckElement();
  }

  private addManagerCheckElement() {
    let panelElement = new PanelElement('Managers', false, '', 'looks fine :)')
    this.offices.forEach(o => {
      if(!this.checkManagers(o.id)){
        panelElement.warning=true;
        panelElement.warningContent += ('incorrect number of managers in office with id = ' + o.id + '; ')
      }
      }
    )
    this.elements.push(panelElement)
  }

  private checkManagers(officeId: number){
    return this.employees
      .filter(e=> e.branchOfficeId === officeId)
      .filter(e=> e.jobPosition === 'MANAGER')
      .length === 1;
  }

  private loadDataAndCreatePanels() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
      this.officeService.findAll().subscribe(data => {
        this.offices = data;
        this.loadPanelElements();
      })
    })

  }
}
