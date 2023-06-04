import {Component} from '@angular/core';
import {DetailElement} from "../../../../model/template-elements/detail-element";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../../../service/employee/employee.service";
import {Employee} from "../../../../model/employee";
import {UpdateFormElement} from "../../../../model/template-elements/update-form-element";
import {UpdateDto} from "../../../../model/rest/request/update-dto";
import {EmployeeRequest} from "../../../../model/rest/request/employee-request";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  employee: Employee;
  updateElement: UpdateFormElement;
  updateModalVisible: boolean;
  deleteModalVisible: boolean;
  modalHeader: string;
  elements: DetailElement[];
  newPassword: string;
  failModalVisible: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit() {
    this.updateModalVisible = false;
    this.loadElements();
  }

  showEditModal(element: DetailElement) {
    this.modalHeader = 'edit: ' + element.title;
    this.updateElement = new UpdateFormElement(element.value, element.name);
    this.updateModalVisible = true;
  }

  showDeleteModal() {
    this.deleteModalVisible = true;
  }

  onSubmit() {
    let employeeUpdateDto: UpdateDto = this.createUpdateDto();
    this.updateEmployeeAndRefreshDisplay(employeeUpdateDto);
    this.updateModalVisible = false;
  }

  deleteEmployee() {
    this.employeeService.delete(this.getId()).subscribe(() =>
      this.router.navigateByUrl('/admin/employee')
    );
  }

  private loadElements() {
    let id = this.getId();
    this.getEmployeeAndCreateElements(id);
  }

  private getId() {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getEmployeeAndCreateElements(id: number) {
    this.employeeService.findById(id).subscribe(data => {
      this.employee = data;
      this.createElements(data);
    })
  }

  private createElements(employee: Employee) {
    this.elements = [
      new DetailElement('id', employee.id, false, 'id'),
      new DetailElement('first name', employee.firstName, true, 'firstName'),
      new DetailElement('last name', employee.lastName, true, 'lastName'),
      new DetailElement('job position', employee.jobPosition, true, 'jobPosition'),
      new DetailElement('branch office id', employee.officeId, true, 'officeId'),
      new DetailElement('email', employee.email, true, 'email')
    ]
  }

  private createUpdateDto() {
    let employeeUpdateRequest: EmployeeRequest = new EmployeeRequest(
      this.employee.firstName,
      this.employee.lastName,
      this.employee.jobPosition,
      this.employee.officeId,
      this.employee.email,
      this.newPassword);

    let changedField = Object.defineProperty({}, this.updateElement.name, {
      value: this.updateElement.value,
      writable: true,
      enumerable: true,
      configurable: true,
    });

    return Object.assign(employeeUpdateRequest, changedField);
  }

  private updateEmployeeAndRefreshDisplay(dto: UpdateDto) {
    let id = this.getId()
    this.employeeService.update(id, dto).subscribe(
      data => {
        if (data) {
          this.createElements(data);
        } else {
          this.loadElements();
          this.failModalVisible = true;
        }
      }
    );
  }
}
