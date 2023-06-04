import {Component} from '@angular/core';
import {Car} from "../../../../model/car";
import {CarService} from "../../../../service/car/car.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DetailElement} from "../../../../model/template-elements/detail-element";
import {UpdateFormElement} from "../../../../model/template-elements/update-form-element";
import {CarRequest} from "../../../../model/rest/request/car-request";
import {UpdateDto} from "../../../../model/rest/request/update-dto";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent {

  car: Car;
  updateElement: UpdateFormElement;
  updateModalVisible: boolean;
  deleteModalVisible: boolean;
  failModalVisible: boolean;
  modalHeader: string;
  elements: DetailElement[];

  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarService,
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
    let carUpdateDto: CarRequest = this.createUpdateDto();
    this.updateCarAndRefreshDisplay(carUpdateDto);
    this.updateModalVisible = false;
  }

  deleteCar() {
    this.carService.delete(this.getId()).subscribe(() =>
      this.router.navigateByUrl('/admin/car')
    );
  }


  private loadElements() {
    let id = this.getId();
    this.getCarAndCreateElements(id);
  }

  private getId() {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getCarAndCreateElements(id: number) {
    this.carService.findById(id).subscribe(data => {
      if(data){
        this.car = data;
        this.createElements(data);
      } else {
        this.failModalVisible = true;
      }

    })
  }

  private createElements(car: Car) {
    this.elements = [
      new DetailElement('id', car.id, false, 'id'),
      new DetailElement('make', car.make, true, 'make'),
      new DetailElement('model', car.model, true, 'model'),
      new DetailElement('mileage', car.mileage, true, 'mileage'),
      new DetailElement('min rental time', car.minRentalTime, true, 'minRentalTime'),
      new DetailElement('year of manufacture', car.yearOfManufacture, true, 'yearOfManufacture'),
      new DetailElement('body type', car.bodyType, true, 'bodyType'),
      new DetailElement('color', car.color, true, 'color'),
      new DetailElement('status', car.status, true, 'status'),
      new DetailElement('price list id', car.priceListId, true, 'priceListId'),
      new DetailElement('current office id', car.currentOfficeId, true, 'officeId'),
    ]
  }

  private createUpdateDto() {
    let updateDto = this.car as CarRequest;
    let changedField = Object.defineProperty({}, this.updateElement.name, {
      value: this.updateElement.value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
    return Object.assign(updateDto, changedField);
  }

  private updateCarAndRefreshDisplay(dto: UpdateDto) {
    let id = this.getId()
    this.carService.update(id, dto).subscribe(
      data => {
        if(data){
          this.createElements(data);
        } else {
          this.loadElements();
          this.failModalVisible = true;
        }
      }
    );
  }

}
