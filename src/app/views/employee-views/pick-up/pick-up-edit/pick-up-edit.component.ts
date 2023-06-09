import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PickUp} from "../../../../model/pick-up";
import {BasicListElement} from "../../../../model/template-elements/basic-list-element";
import {PickUpUpdateRequest} from "../../../../model/rest/request/pick-up-update-request";
import {CreateFormElement} from "../../../../model/template-elements/create-form-element";
import {RentalActionStatus} from "../../../../model/enumeration/rental-action-status";
import {PickUpService} from "../../../../service/pick-up/pick-up.service";

@Component({
  selector: 'app-pick-up-edit',
  templateUrl: './pick-up-edit.component.html',
  styleUrls: ['./pick-up-edit.component.scss']
})
export class PickUpEditComponent {
  @Input() pickUp: PickUp;
  @Output() editedPickUpEvent = new EventEmitter<PickUp>();
  unchangeableElements: BasicListElement[];
  updateRequest: PickUpUpdateRequest;
  formElements: CreateFormElement[];
  failModalVisible: boolean;

  constructor(private pickUpService: PickUpService) {
  }

  ngOnChanges() {
    this.refreshUnchangeableElements();
    this.refreshFormElements();
  }

  private refreshUnchangeableElements() {
    this.unchangeableElements = [
      new BasicListElement('pick-up id', this.pickUp.id),
      new BasicListElement('planned pick-up date', this.pickUp.plannedPickUpDate),
      new BasicListElement('reservation id', this.pickUp.reservationId),
      new BasicListElement('car id', this.pickUp.carId),
      new BasicListElement('office id', this.pickUp.officeId),
    ]
  }

  private refreshFormElements() {
    let pickUpDate = this.pickUp.pickUpDate != null ? new Date(this.pickUp.pickUpDate) : null;

    this.formElements = [
      new CreateFormElement('Comments', 'text', this.pickUp.comments, 'comments', true, ''),
      new CreateFormElement('Pick up date', 'date', pickUpDate, 'pickUpDate', true, ''),
      new CreateFormElement('Status', 'select', this.pickUp.status, 'status', true, '', Object.values(RentalActionStatus).map(s => [s, s])),
      new CreateFormElement('Employee id', 'number', this.pickUp.employeeId, 'employeeId', true, ''),
    ]
  }


  onSubmitUpdate() {
    this.createUpdateRequest();
    this.pickUpService.update(this.pickUp.id, this.updateRequest).subscribe(data => {
      if(data){
        this.editedPickUpEvent.emit(data)
      } else {
        this.failModalVisible = true;
      }
    });
  }

  private createUpdateRequest() {
    let comments = this.formElements.find(e => e.name === 'comments')?.model;
    let pickUpDate;
    let pickUpDateFormElement = this.formElements.find(e => e.name === 'pickUpDate');
    if (pickUpDateFormElement != null && pickUpDateFormElement.model != null) {
      pickUpDate = this.dateToString(pickUpDateFormElement.model);
    }
    let status = this.formElements.find(e => e.name === 'status')?.model;
    let employeeId = this.formElements.find(e => e.name === 'employeeId')?.model;

    this.updateRequest = new PickUpUpdateRequest(
      comments,
      pickUpDate,
      this.pickUp.plannedPickUpDate,
      status,
      employeeId,
      this.pickUp.carId,
      this.pickUp.officeId);
  }

  private dateToString(d: Date): string {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
}
