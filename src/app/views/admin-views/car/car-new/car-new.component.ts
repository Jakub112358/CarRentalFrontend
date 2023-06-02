import {Component} from '@angular/core';
import {CreateFormElement} from "../../../../model/template-elements/create-form-element";
import {OfficeService} from "../../../../service/office/office.service";
import {CarService} from "../../../../service/car/car.service";
import {Office} from "../../../../model/office";
import {BodyType} from "../../../../model/enumeration/body-type";
import {Color} from "../../../../model/enumeration/color";
import {Status} from "../../../../model/enumeration/status";
import {PriceListService} from "../../../../service/priceList/price-list.service";
import {PriceList} from "../../../../model/price-list";
import {CarRequestDto} from "../../../../model/rest/request/car-request-dto";


@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.scss']
})
export class CarNewComponent {

  successModalVisible: boolean;
  addedCarPath: string;
  elements: CreateFormElement[];
  failModalVisible: boolean;

  constructor(
    private officeService: OfficeService,
    private priceListService: PriceListService,
    private carService: CarService
  ) {
  }

  ngOnInit() {
    this.loadFormElements();
  }

  onSubmit() {
    this.saveNewCar();
  }

  addNextCar() {
    this.loadFormElements();
    this.successModalVisible = false;
  }

  private saveNewCar() {
    let car: CarRequestDto = this.mapFormElementsToCarDto();
    this.carService.save(car).subscribe(data => {
      if (data) {
        this.successModalVisible = true;
        this.addedCarPath = '/admin/car/' + data.id;
      } else {
        this.failModalVisible = true;
      }
    })
  }

  private loadFormElements() {
    this.officeService.findAll()
      .subscribe(offices => {
        this.priceListService.findAll()
          .subscribe(priceLists => {
            let bodyTypeOptions = this.getBodyTypeOptions();
            let colorOptions = this.getColorOptions();
            let statusOptions = this.getStatusOptions();
            let priceListOptions = this.getPriceListOptions(priceLists);
            let branchOfficeOptions = this.getOfficeOptions(offices)
            this.createFormElements(bodyTypeOptions, colorOptions, statusOptions, priceListOptions, branchOfficeOptions);
          })
      })
  }

  private getBodyTypeOptions() {
    return Object.values(BodyType).map(jp => [jp, jp]);
  }

  private getColorOptions() {
    return Object.values(Color).map(jp => [jp, jp]);
  }

  private getStatusOptions() {
    return Object.values(Status).map(jp => [jp, jp]);
  }

  private getOfficeOptions(data: Office[]) {
    return data.map(o => [o.id, this.officeToString(o)]);
  }

  private getPriceListOptions(data: PriceList[]) {
    return data.map(o => [o.id, this.priceListToString(o)]);
  }

  private officeToString(office: Office): string {
    return ('id: ' + office.id + ', address: ' + office.address.zipCode + ' ' + office.address.town + ', ' + office.address.street + ' ' + office.address.houseNumber);
  }

  private priceListToString(priceList: PriceList): string {
    return ('id: ' + priceList.id + ', short term price: ' + priceList.shortTermPrice + ', medium term price: ' + priceList.mediumTermPrice + ', long term price: ' + priceList.longTermPrice)
  }

  private createFormElements(bodyTypeOptions: any[][], colorOptions: any[][], statusOptions: any[][], priceListOptions: any[][], currentOfficeOptions: any[][]) {
    this.elements = [
      new CreateFormElement('make', 'text', '', 'make', true, 'invalid make'),
      new CreateFormElement('model', 'text', '', 'model', true, 'invalid model'),
      new CreateFormElement('mileage', 'number', 1, 'mileage', true, 'invalid mileage'),
      new CreateFormElement('min rental time', 'number', 1, 'minRentalTime', true, 'invalid min rental time'),
      new CreateFormElement('year of manufacture', 'number', 2000, 'yearOfManufacture', true, 'invalid year of manufacture'),
      new CreateFormElement('body type', 'select', 0, 'bodyType', true, 'invalid body type', bodyTypeOptions),
      new CreateFormElement('color', 'select', 0, 'color', true, 'invalid color', colorOptions),
      new CreateFormElement('status', 'select', 0, 'status', true, 'invalid status', statusOptions),
      new CreateFormElement('price list id', 'select', 0, 'priceListId', true, 'invalid price list id', priceListOptions),
      new CreateFormElement('current office id', 'select', 0, 'currentOfficeId', true, 'invalid current office id', currentOfficeOptions)
    ]
  }

  private mapFormElementsToCarDto() {
    let make = this.elements.find(e => e.name === 'make')?.model;
    let model = this.elements.find(e => e.name === 'model')?.model;
    let mileage = this.elements.find(e => e.name === 'mileage')?.model;
    let minRentalTime = this.elements.find(e => e.name === 'minRentalTime')?.model;
    let yearOfManufacture = this.elements.find(e => e.name === 'yearOfManufacture')?.model;
    let bodyType = this.elements.find(e => e.name === 'bodyType')?.model;
    let color = this.elements.find(e => e.name === 'color')?.model;
    let status = this.elements.find(e => e.name === 'status')?.model;
    let priceListId = this.elements.find(e => e.name === 'priceListId')?.model;
    let currentOfficeId = this.elements.find(e => e.name === 'currentOfficeId')?.model;

    return new CarRequestDto(make, model, mileage, minRentalTime, yearOfManufacture, bodyType, color, status, priceListId, currentOfficeId);
  }

}
