import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BasicListElement} from "../../../../model/template-elements/basic-list-element";
import {CreateFormElement} from "../../../../model/template-elements/create-form-element";
import {CarReturn} from "../../../../model/car-return";
import {ReturnService} from "../../../../service/return.service";
import {CarReturnUpdateEmployeeRequest} from "../../../../model/rest/request/car-return-update-employee-request";
import {RentalActionStatus} from "../../../../model/enumeration/rental-action-status";

//TODO: validate!
@Component({
  selector: 'app-return-edit',
  templateUrl: './return-edit.component.html',
  styleUrls: ['./return-edit.component.scss']
})

export class ReturnEditComponent {
  @Input() carReturn: CarReturn;
  @Output() editedCarReturnEvent = new EventEmitter<CarReturn>();
  unchangeableElements: BasicListElement[];
  updateRequest: CarReturnUpdateEmployeeRequest;
  formElements: CreateFormElement[];

  constructor(private carReturnService: ReturnService) {
  }

  ngOnChanges() {
    this.refreshUnchangeableElements();
    this.refreshFormElements();
  }

  private refreshUnchangeableElements() {
    this.unchangeableElements = [
      new BasicListElement('car return id', this.carReturn.id),
      new BasicListElement('planned return date', this.carReturn.plannedReturnDate),
      new BasicListElement('reservation id', this.carReturn.reservationId),
      new BasicListElement('car id', this.carReturn.carId),
      new BasicListElement('office id', this.carReturn.officeId),
    ]
  }

  private refreshFormElements() {
    let returnDate = this.carReturn.returnDate != null ? new Date(this.carReturn.returnDate) : null;

    this.formElements = [
      new CreateFormElement('Comments', 'text', this.carReturn.comments, 'comments', true, ''),
      new CreateFormElement('Return date', 'date', returnDate, 'returnDate', true, ''),
      new CreateFormElement('Status', 'select', this.carReturn.status, 'status', true, '', Object.values(RentalActionStatus).map(s => [s, s])),
      new CreateFormElement('Employee id', 'number', this.carReturn.employeeId, 'employeeId', true, ''),
      new CreateFormElement('Extra charge', 'number', 0, 'extraCharge', true, ''),
      new CreateFormElement('Mileage', 'number', 0, 'mileage', true, ''),
    ]
  }

  onSubmitUpdate() {
    this.createUpdateRequest();
    this.carReturnService.update(this.carReturn.id, this.updateRequest).subscribe(data => {
      this.editedCarReturnEvent.emit(data)
    });
  }

  private createUpdateRequest() {
    let comments = this.formElements.find(e => e.name === 'comments')?.model;
    let returnDate;
    let returnDateFormElement = this.formElements.find(e => e.name === 'returnDate');
    if (returnDateFormElement != null) {
      returnDate = this.dateToString(returnDateFormElement.model);
    }
    let status = this.formElements.find(e => e.name === 'status')?.model;
    let employeeId = this.formElements.find(e => e.name === 'employeeId')?.model;
    let extraCharge = this.formElements.find(e => e.name === 'extraCharge')?.model;
    let mileage = this.formElements.find(e => e.name === 'mileage')?.model;
    this.updateRequest = new CarReturnUpdateEmployeeRequest(comments, extraCharge, returnDate, status, employeeId, mileage);
  }

  private dateToString(d: Date): string {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }

}
