import {Component} from '@angular/core';
import {CreateFormElement} from "../../../../model/template-elements/create-form-element";
import {JobPosition} from "../../../../model/enumeration/job-position";
import {EmployeeValidator} from "../../../../util/validator/employee-validator";
import {Office} from "../../../../model/office";
import {OfficeService} from "../../../../service/office/office.service";
import {EmployeeService} from "../../../../service/employee/employee.service";
import {EmployeeRequestDto} from "../../../../model/rest/request/employee-request-dto";

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

  private createFormElements(jobPositionOptions: any[][], officeOptions: any[][]) {
    this.elements = [
      new CreateFormElement('First name', 'text', '', 'firstName', true, 'invalid name'),
      new CreateFormElement('Last name', 'text', '', 'lastName', true, 'invalid last name'),
      new CreateFormElement('Job position', 'select', '', 'jobPosition', true, 'invalid job position', jobPositionOptions),
      new CreateFormElement('Branch office', 'select', 0, 'officeId', true, 'invalid branch office id', officeOptions),
      new CreateFormElement('email', 'text', '', 'email', true, 'invalid email'),
      new CreateFormElement('password', 'text', '', 'password', true, 'invalid password')
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
    let employee: EmployeeRequestDto = this.mapFormElementsToEmployeeDto();
    this.employeeService.save(employee).subscribe(data => {
      if (data) {
        this.addedEmployeePath = '/admin/employee/' + data.id;
      } else {
        this.failModalVisible = true;
      }
    })
  }

  private mapFormElementsToEmployeeDto() {
    let firstName = this.elements.find(e => e.name === 'firstName')?.model;
    let lastName = this.elements.find(e => e.name === 'lastName')?.model;
    let jobPosition = this.elements.find(e => e.name === 'jobPosition')?.model;
    let officeId = this.elements.find(e => e.name === 'officeId')?.model;
    let email = this.elements.find(e => e.name === 'email')?.model;
    let password = this.elements.find(e => e.name === 'password')?.model;

    return new EmployeeRequestDto(firstName, lastName, jobPosition, officeId, email, password);
  }
}
