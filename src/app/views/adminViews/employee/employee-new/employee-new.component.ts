import {Component} from '@angular/core';
import {CreateFormElement} from "../../../../model/templateElements/CreateFormElement";
import {JobPosition} from "../../../../model/enumeration/JobPosition";
import {EmployeeValidator} from "../../../../util/validator/EmployeeValidator";
import {Office} from "../../../../model/Office";
import {OfficeService} from "../../../../service/office.service";
import {EmployeeService} from "../../../../service/employee.service";
import {EmployeeCreateDto} from "../../../../model/dto/createDto/EmployeeCreateDto";

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent {
  successModalVisible: boolean;
  failModalVisible: boolean;
  addedEmployeePath: string;
  elements: CreateFormElement[];


  constructor(
    private employeeValidator: EmployeeValidator,
    private officeService: OfficeService,
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit() {
    this.loadFormElements();
  }

  addNextEmployee() {
    this.loadFormElements();
    this.successModalVisible = false;
  }

  onSubmit() {
    if (this.validateForm()) {
      this.saveNewEmployee();
      this.successModalVisible = true;
    } else {
      this.failModalVisible = true;
    }
  }

  private loadFormElements() {
    this.officeService.findAll()
      .subscribe(data => {
        let jobPositionOptions = this.getJobPositionOptions();
        let branchOfficeOptions = this.getBranchOfficeOptions(data)
        this.createFormElements(jobPositionOptions, branchOfficeOptions);
      })
  }

  private getJobPositionOptions() {
    return Object.values(JobPosition).map(jp => [jp, jp]);
  }

  private officeToString(office: Office): string {
    return ('id: ' + office.id + ', address: ' + office.address.zipCode + ' ' + office.address.town + ', ' + office.address.street + ' ' + office.address.houseNumber);
  }

  private getBranchOfficeOptions(data: Office[]) {
    return data.map(o => [o.id, this.officeToString(o)]);
  }

  private createFormElements(jobPositionOptions: any[][], branchOfficeOptions: any[][]) {
    this.elements = [
      new CreateFormElement('First name', 'text', '', 'firstName', true, 'invalid name'),
      new CreateFormElement('Last name', 'text', '', 'lastName', true, 'invalid last name'),
      new CreateFormElement('Job position', 'select', '', 'jobPosition', true, 'invalid job position', jobPositionOptions),
      new CreateFormElement('Branch office', 'select', 0, 'branchOfficeId', true, 'invalid branch office id', branchOfficeOptions)
    ]
  }

  private validateForm() {
    this.elements
      .forEach(e => {
        e.valid = this.employeeValidator.validateField(e.name, e.model);
      })
    return this.elements.every(e => e.valid);
  }

  private saveNewEmployee() {
    let employee: EmployeeCreateDto = this.mapFormElementsToEmployeeDto();
    this.employeeService.save(employee).subscribe(data => {
      this.addedEmployeePath = '/admin/employee/' + data.id;
    })
  }

  private mapFormElementsToEmployeeDto() {
    let firstNameElement = this.elements.find(e=> e.name === 'firstName');
    let lastNameElement = this.elements.find(e=> e.name === 'lastName');
    let jobPositionElement = this.elements.find(e=> e.name === 'jobPosition');
    let branchOfficeIdElement = this.elements.find(e=> e.name === 'branchOfficeId');

    return {
      firstName: firstNameElement !== undefined ? firstNameElement.model : '',
      lastName: lastNameElement !== undefined ? lastNameElement.model : '',
      jobPosition:jobPositionElement !== undefined ? jobPositionElement.model : '',
      branchOfficeId: branchOfficeIdElement !== undefined ? branchOfficeIdElement.model : 0,
    }
  }
}
