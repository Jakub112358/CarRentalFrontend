import {Component} from '@angular/core';
import {CreateFormElement} from "../../../../model/templateElements/CreateFormElement";
import {OfficeService} from "../../../../service/office.service";
import {Office} from "../../../../model/Office";
import {Car} from "../../../../model/Car";
import {CarService} from "../../../../service/car.service";
import {ReservationValidator} from "../../../../util/validator/ReservationValidator";

@Component({
  selector: 'app-reservation-new',
  templateUrl: './reservation-new.component.html',
  styleUrls: ['./reservation-new.component.scss']
})
export class ReservationNewComponent {
  dateAndOfficeElements: CreateFormElement[];
  cars: Car[];


  constructor(private officeService: OfficeService,
              private carService: CarService,
              private reservationValidator: ReservationValidator) {
  }

  ngOnInit() {
    this.loadFormElements();
  }

  onSubmitFindCars() {
    this.validateDateAndOfficeForm()
  }

  private createFormElements(branchOfficeOptions: any[][]) {
    this.dateAndOfficeElements = [
      new CreateFormElement('Date From', 'date', '', 'dateFrom', true, 'invalid date', undefined, new Date()),
      new CreateFormElement('Date To', 'date', '', 'dateTo', true, 'invalid date',undefined,new Date()),
      new CreateFormElement('Pick-up Office', 'select', '', 'pickUpOfficeId', true, 'invalid office', branchOfficeOptions),
      new CreateFormElement('Return Office', 'select', '', 'returnOfficeId', true, 'invalid office', branchOfficeOptions),
    ]
  }

  private loadFormElements() {
    this.officeService.findAll()
      .subscribe(data => {
        let branchOfficeOptions = this.getBranchOfficeOptions(data)
        this.createFormElements(branchOfficeOptions);
      })
  }

  private getBranchOfficeOptions(data: Office[]) {
    return data.map(o => [o.id, this.officeToString(o)]);
  }

  private officeToString(office: Office): string {
    return ('id: ' + office.id + ', address: ' + office.address.zipCode + ' ' + office.address.town + ', ' + office.address.street + ' ' + office.address.houseNumber);
  }

  private validateDateAndOfficeForm(): boolean {
    this.reservationValidator.validateDateAndOfficeForm(this.dateAndOfficeElements);

    return this.dateAndOfficeElements.every(e => e.valid);
  }
}
