import {Component} from '@angular/core';
import {DetailElement} from "../../../../model/templateElements/DetailElement";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../../../service/employee.service";
import {Employee} from "../../../../model/Employee";
import {UpdateFormElement} from "../../../../model/templateElements/UpdateFormElement";
import {UpdateDto} from "../../../../model/dto/updateDto/UpdateDto";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  elements: DetailElement[];
  updateElement: UpdateFormElement;
  modalVisible: boolean;
  modalHeader: string;

  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.modalVisible = false;
    this.loadElements();
  }

  showEditModal(element: DetailElement) {
    this.modalHeader = 'edit: ' + element.title;
    this.updateElement = new UpdateFormElement(element.value, element.name);
    this.modalVisible = true;
  }

  onSubmit() {
    let employeeUpdateDto: UpdateDto = this.createUpdateDto();
    this.updateEmployeeAndRefreshDisplay(employeeUpdateDto);
    this.modalVisible = false;
  }

  private loadElements() {
    let id = this.getEmployeeId();
    this.getEmployeeAndCreateElements(id);
  }

  private getEmployeeId() {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getEmployeeAndCreateElements(id: number) {
    this.employeeService.findById(id).subscribe(data => {
      this.createElements(data);
    })
  }

  private createElements(employee: Employee) {
    this.elements = [
      new DetailElement('id', employee.id, false, 'id'),
      new DetailElement('first name', employee.firstName, true, 'firstName'),
      new DetailElement('last name', employee.lastName, true, 'lastName'),
      new DetailElement('job position', employee.jobPosition, true, 'jobPosition'),
      new DetailElement('branch office id', employee.branchOfficeId, true, 'branchOfficeId')
    ]
  }

  private createUpdateDto() {
    let o = Object.defineProperty({}, this.updateElement.name, {
      value: this.updateElement.value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
    return (o as UpdateDto)
  }

  private updateEmployeeAndRefreshDisplay(dto: UpdateDto) {
    let id = this.getEmployeeId()
    this.employeeService.update(id, dto).subscribe(
      data => {
        this.createElements(data);
      }
    );
  }
}
