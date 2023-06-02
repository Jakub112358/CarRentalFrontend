import {Component} from '@angular/core';
import {CreateFormElement} from "../../../../model/template-elements/create-form-element";
import {OfficeService} from "../../../../service/office/office.service";
import {Office} from "../../../../model/office";
import {Car} from "../../../../model/car";
import {CarService} from "../../../../service/car/car.service";
import {ReservationValidator} from "../../../../util/validator/reservation-validator";
import {CarRentDto} from "../../../../model/rest/request/car-rent-dto";
import {ReservationCreateDto} from "../../../../model/rest/request/create/reservation-create-dto";
import {BasicListElement} from "../../../../model/template-elements/basic-list-element";
import {ReservationService} from "../../../../service/reservation/reservation.service";
import {Reservation} from "../../../../model/reservation";

@Component({
  selector: 'app-reservation-new',
  templateUrl: './reservation-new.component.html',
  styleUrls: ['./reservation-new.component.scss']
})
export class ReservationNewComponent {
  dateAndOfficeElements: CreateFormElement[];
  cars: Car[];
  confirmReservationElements: BasicListElement[];
  showCars: boolean;
  showConfirmReservation: boolean;
  reservationCreateDto: ReservationCreateDto;
  offices: Office[];
  reservation: Reservation;


  constructor(private officeService: OfficeService,
              private carService: CarService,
              private reservationValidator: ReservationValidator,
              private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.loadFormElements();
  }

  onSubmitFindCars() {
    if (this.validateDateAndOfficeForm()) {
      this.showCars = true;
      this.loadCars();
    }
  }

  private createFormElements(branchOfficeOptions: any[][]) {
    this.dateAndOfficeElements = [
      new CreateFormElement('Date From', 'date', '', 'dateFrom', true, 'invalid date', undefined, new Date()),
      new CreateFormElement('Date To', 'date', '', 'dateTo', true, 'invalid date', undefined, new Date()),
      new CreateFormElement('Pick-up Office', 'select', '', 'pickUpOfficeId', true, 'invalid office', branchOfficeOptions),
      new CreateFormElement('CarReturn Office', 'select', '', 'returnOfficeId', true, 'invalid office', branchOfficeOptions),
    ]
  }

  private loadFormElements() {
    this.officeService.findAll()
      .subscribe(data => {
        this.offices = data;
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

  private loadCars() {
    this.carService.findByAvailableInDatesAndCriteria(this.dateAndOfficeElements).subscribe(data => {
      this.cars = data
    })
  }

  selectCar(car: CarRentDto) {
    this.createReservation(car);
    this.createConfirmReservationElements(car);
    this.showConfirmReservation = true;
  }

  private createReservation(car: CarRentDto) {
    let dateFromValue = this.dateAndOfficeElements.find(e => e.name == 'dateFrom')?.model
    let dateToValue = this.dateAndOfficeElements.find(e => e.name == 'dateTo')?.model
    let pickUpOfficeId = this.dateAndOfficeElements.find(e => e.name == 'pickUpOfficeId')?.model
    let returnOfficeId = this.dateAndOfficeElements.find(e => e.name == 'returnOfficeId')?.model
    let clientId = this.getClientId();
    this.reservationCreateDto = new ReservationCreateDto(
      new Date(),
      dateFromValue,
      dateToValue,
      clientId,
      car.id,
      pickUpOfficeId,
      returnOfficeId,
      car.price
    )
  }

//TODO should return logged client id
  private getClientId() {
    return 1;
  }

  private createConfirmReservationElements(car: CarRentDto) {

    let pickUpOfficeString = this.officeIdToString(this.reservationCreateDto.pickUpOfficeId);
    let returnOfficeString = this.officeIdToString(this.reservationCreateDto.returnOfficeId);

    this.confirmReservationElements = [
      new BasicListElement('Car', this.carRentDtoToString(car)),
      new BasicListElement('Date from', this.reservationCreateDto.dateFrom.toDateString()),
      new BasicListElement('Date to', this.reservationCreateDto.dateTo.toDateString()),
      new BasicListElement('Pick-up office', pickUpOfficeString),
      new BasicListElement('CarReturn office', returnOfficeString),
      new BasicListElement('Price', this.reservationCreateDto.price),
    ]
  }

  private carRentDtoToString(car: CarRentDto) {
    return (car.make + ' ' + car.model + ', color: ' + car.color + ', year of manufacture: ' + car.yearOfManufacture);
  }

  private officeIdToString(officeId: number) {
    let office = this.offices.find(o => o.id === Number(officeId))
    return  office ? this.officeToString(office) : undefined;
  }

  onSubmitReservation() {
    this.reservationCreateDto.dateTo = this.dateToString(this.reservationCreateDto.dateTo);
    this.reservationCreateDto.dateFrom = this.dateToString(this.reservationCreateDto.dateFrom);
    this.reservationService.save(this.reservationCreateDto).subscribe(data=>{
      this.reservation = data;
      console.log(this.reservationCreateDto.dateTo)
      console.log(this.reservation.dateTo)
      console.log(this.reservationCreateDto.dateFrom)
      console.log(this.reservation.dateFrom)
    })
  }

  private dateToString(d: Date): string {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }

}
