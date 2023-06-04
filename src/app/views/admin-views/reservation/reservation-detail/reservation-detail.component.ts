import {Component} from '@angular/core';
import {UpdateFormElement} from "../../../../model/template-elements/update-form-element";
import {DetailElement} from "../../../../model/template-elements/detail-element";
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../../../../model/reservation";
import {ReservationService} from "../../../../service/reservation/reservation.service";
import {Car} from "../../../../model/car";
import {Office} from "../../../../model/office";
import {ReservationUpdateRequest} from "../../../../model/rest/request/reservation-update-request";
import {UpdateDto} from "../../../../model/rest/request/update-dto/UpdateDto";

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent {
  reservation: Reservation;
  updateElement: UpdateFormElement;
  updateModalVisible: boolean;
  deleteModalVisible: boolean;
  modalHeader: string;
  elements: DetailElement[];
  failModalVisible: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private reservationService: ReservationService,
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
    let reservationUpdateDto: ReservationUpdateRequest = this.createUpdateDto();
    this.updateReservationAndRefreshDisplay(reservationUpdateDto);
    this.updateModalVisible = false;
  }

  deleteReservation() {
    this.reservationService.delete(this.getId()).subscribe(() =>
      this.router.navigateByUrl('/admin/reservation')
    );
  }

  private loadElements() {
    let id = this.getId();
    this.getReservationAndCreateElements(id);
  }

  private getId() {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getReservationAndCreateElements(id: number) {
    this.reservationService.findById(id).subscribe(data => {
      this.reservation = data;
      this.createElements(data);
    })
  }

  private createElements(reservation: Reservation) {
    this.elements = [
      new DetailElement('id', reservation.id, false, 'id'),
      new DetailElement('reservation date', reservation.reservationDate, false, 'reservationDate'),
      new DetailElement('date from', reservation.dateFrom, false, 'dateFrom'),
      new DetailElement('date to', reservation.dateTo, false, 'dateTo'),
      new DetailElement('price', reservation.price, false, 'price'),
      new DetailElement('status', reservation.status, true, 'status'),
      new DetailElement('client id', reservation.clientId, false, 'clientId'),
      new DetailElement('car', this.carToString(reservation.car), false, 'car'),
      new DetailElement('pick up office', this.officeToString(reservation.pickUpOffice), false, 'pickUpOffice'),
      new DetailElement('return office', this.officeToString(reservation.returnOffice), false, 'returnOffice'),
    ]
  }

  carToString(car: Car) {
    return car.make + ' ' + car.model + ', car id: ' +car.id;
  }

  officeToString(office: Office) {
    return office.address.town + ', ' + office.address.street + ' ' + office.address.houseNumber;
  }

  private createUpdateDto() {
    return new ReservationUpdateRequest(this.updateElement.value)
  }

  private updateReservationAndRefreshDisplay(dto: UpdateDto) {
    let id = this.getId()
    this.reservationService.update(id, dto).subscribe(
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
