import {Component} from '@angular/core';
import {CreateFormElement} from "../../../../model/template-elements/create-form-element";
import {OfficeService} from "../../../../service/office/office.service";
import {Office} from "../../../../model/office";
import {Car} from "../../../../model/car";
import {CarService} from "../../../../service/car/car.service";
import {ReservationValidator} from "../../../../util/validator/reservation-validator";
import {ReservationCreateRequest} from "../../../../model/rest/request/reservation-create-request";
import {BasicListElement} from "../../../../model/template-elements/basic-list-element";
import {ReservationService} from "../../../../service/reservation/reservation.service";
import {CarSearch} from "../../../../model/car-search";
import {JwtTokenService} from "../../../../auth/jwt-token.service";
import {Make} from "../../../../model/enumeration/make";
import {CarSearchCriteria} from "../../../../model/rest/request/car-search-criteria";
import {Color} from "../../../../model/enumeration/color";

@Component({
  selector: 'app-reservation-new',
  templateUrl: './reservation-new.component.html',
  styleUrls: ['./reservation-new.component.scss']
})
export class ReservationNewComponent {
  dateAndOfficeElements: CreateFormElement[];
  carSearches: CarSearch[];
  confirmReservationElements: BasicListElement[];
  showCars: boolean;
  showConfirmReservation: boolean;
  reservationCreateDto: ReservationCreateRequest;
  offices: Office[];
  failModalVisible: boolean;
  successModalVisible: boolean;
  reservationListPath: string;
  makes: string[];
  colors: string[];
  criteria: CarSearchCriteria;


  constructor(private officeService: OfficeService,
              private carService: CarService,
              private reservationValidator: ReservationValidator,
              private reservationService: ReservationService,
              private tokenService: JwtTokenService) {
  }

  ngOnInit() {
    this.reservationListPath = '/client/reservation/';
    this.loadEnumsOptions();
    this.loadFormElements();
    this.criteria = new CarSearchCriteria();
  }

  onSubmitFindCars() {
    if (this.validateDateAndOfficeForm()) {
      this.showCars = true;
      this.nullEmptyArraysInCriteria();
      this.loadCars(this.criteria);
    }
  }

  addNextReservation() {
    this.loadFormElements();
    this.showConfirmReservation = false;
    this.successModalVisible = false;
    this.carSearches = [];
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
    return ('id: ' + office?.id + ', address: ' + office?.address.zipCode + ' ' + office?.address.town + ', ' + office?.address.street + ' ' + office?.address.houseNumber);
  }

  private validateDateAndOfficeForm(): boolean {
    this.reservationValidator.validateDateAndOfficeForm(this.dateAndOfficeElements);
    return this.dateAndOfficeElements.every(e => e.valid);
  }

  private loadCars(criteria?: CarSearchCriteria) {
    this.carService.findByAvailableInDatesAndCriteria(this.dateAndOfficeElements, criteria).subscribe(data => {
      this.carSearches = data
    })
  }

  selectCar(carSearch: CarSearch) {
    this.createReservation(carSearch);
    this.createConfirmReservationElements(carSearch);
    this.showConfirmReservation = true;
  }

  private createReservation(car: CarSearch) {
    let dateFromValue = this.dateAndOfficeElements.find(e => e.name == 'dateFrom')?.model
    let dateToValue = this.dateAndOfficeElements.find(e => e.name == 'dateTo')?.model
    let pickUpOfficeId = this.dateAndOfficeElements.find(e => e.name == 'pickUpOfficeId')?.model
    let returnOfficeId = this.dateAndOfficeElements.find(e => e.name == 'returnOfficeId')?.model
    let clientId = this.getClientId();
    this.reservationCreateDto = new ReservationCreateRequest(
      dateFromValue,
      dateToValue,
      clientId,
      car.carResponse.id,
      pickUpOfficeId,
      returnOfficeId,
      car.price
    )
  }

  private getClientId() {
    return this.tokenService.getUserId();
  }

  private createConfirmReservationElements(car: CarSearch) {

    let pickUpOfficeString = this.officeIdToString(this.reservationCreateDto.pickUpOfficeId);
    let returnOfficeString = this.officeIdToString(this.reservationCreateDto.returnOfficeId);

    this.confirmReservationElements = [
      new BasicListElement('Car', this.carRentDtoToString(car.carResponse)),
      new BasicListElement('Date from', this.reservationCreateDto.dateFrom.toDateString()),
      new BasicListElement('Date to', this.reservationCreateDto.dateTo.toDateString()),
      new BasicListElement('Pick-up office', pickUpOfficeString),
      new BasicListElement('CarReturn office', returnOfficeString),
      new BasicListElement('Price', this.reservationCreateDto.price),
    ]
  }

  private carRentDtoToString(car: Car) {
    return (car?.make + ' ' + car?.model + ', color: ' + car?.color + ', year of manufacture: ' + car?.yearOfManufacture);
  }

  private officeIdToString(officeId: number) {
    let office = this.offices.find(o => o.id === Number(officeId))
    return office ? this.officeToString(office) : undefined;
  }

  onSubmitReservation() {
    this.reservationCreateDto.dateTo = this.dateToString(this.reservationCreateDto.dateTo);
    this.reservationCreateDto.dateFrom = this.dateToString(this.reservationCreateDto.dateFrom);
    this.reservationService.save(this.reservationCreateDto).subscribe(data => {
      if (data) {
        this.successModalVisible = true;
      } else {
        this.failModalVisible = true;
      }
    })
  }

  private dateToString(d: Date): string {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }

  private loadEnumsOptions() {
    this.makes = Object.values(Make);
    this.colors = Object.values(Color);
  }

  private nullEmptyArraysInCriteria() {
    if (this.criteria.colorOf?.length == 0){
      this.criteria.colorOf = undefined;
    }

    if (this.criteria.makeOf?.length == 0){
      this.criteria.makeOf = undefined;
    }

  }
}
