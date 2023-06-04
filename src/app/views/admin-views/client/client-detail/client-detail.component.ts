import {Component} from '@angular/core';
import {UpdateFormElement} from "../../../../model/template-elements/update-form-element";
import {DetailElement} from "../../../../model/template-elements/detail-element";
import {ActivatedRoute, Router} from "@angular/router";
import {UpdateDto} from "../../../../model/rest/request/update-dto";
import {Client} from "../../../../model/client";
import {ClientService} from "../../../../service/client/client.service";
import {ClientRequest} from "../../../../model/rest/request/client-request";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent {

  client: Client;
  updateElement: UpdateFormElement;
  updateModalVisible: boolean;
  deleteModalVisible: boolean;
  modalHeader: string;
  elements: DetailElement[];
  newPassword: string;
  failModalVisible: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private clientService: ClientService,
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
    let clientUpdateDto: ClientRequest = this.createUpdateDto();
    this.updateClientAndRefreshDisplay(clientUpdateDto);
    this.updateModalVisible = false;
  }

  deleteClient() {
    this.clientService.delete(this.getId()).subscribe(() =>
      this.router.navigateByUrl('/admin/client')
    );
  }

  private loadElements() {
    let id = this.getId();
    this.getClientAndCreateElements(id);
  }

  private getId() {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getClientAndCreateElements(id: number) {
    this.clientService.findById(id).subscribe(data => {
      this.client = data;
      this.createElements(data);
    })
  }

  private createElements(client: Client) {
    this.elements = [
      new DetailElement('id', client.id, false, 'id'),
      new DetailElement('make', client.firstName, true, 'firstName'),
      new DetailElement('model', client.lastName, true, 'lastName'),
      new DetailElement('mileage', client.email, true, 'email'),
      new DetailElement('Zip Code', client.address.zipCode, true, 'zipCode'),
      new DetailElement('Town', client.address.town, true, 'town'),
      new DetailElement('Street', client.address.street, true, 'street'),
      new DetailElement('HouseNumber', client.address.houseNumber, true, 'houseNumber'),
    ]
  }

  private createUpdateDto() {

    let clientUpdateRequest: ClientRequest = new ClientRequest(
      this.client.email,
      this.newPassword,
      this.client.firstName,
      this.client.lastName,
      this.client.address);

    let changedField = Object.defineProperty({}, this.updateElement.name, {
      value: this.updateElement.value,
      writable: true,
      enumerable: true,
      configurable: true,
    });

    if (this.updateElement.name === 'zipCode' ||
      this.updateElement.name === 'town' ||
      this.updateElement.name === 'street' ||
      this.updateElement.name === 'houseNumber') {
      clientUpdateRequest.address = Object.assign(clientUpdateRequest.address, changedField);
    } else {
      clientUpdateRequest = Object.assign(clientUpdateRequest, changedField);
    }

    clientUpdateRequest.address.id = 0;
    return clientUpdateRequest;
  }

  private updateClientAndRefreshDisplay(dto: UpdateDto) {
    let id = this.getId()
    this.clientService.update(id, dto).subscribe(
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
