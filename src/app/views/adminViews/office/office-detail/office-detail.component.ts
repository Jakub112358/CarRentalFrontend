import {Component} from '@angular/core';
import {DetailElement} from "../../../../model/templateElements/DetailElement";
import {UpdateFormElement} from "../../../../model/templateElements/UpdateFormElement";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../../../service/employee.service";
import {Employee} from "../../../../model/Employee";
import {OfficeService} from "../../../../service/office.service";
import {UpdateDto} from "../../../../model/interfaces/UpdateDto";
import {Office} from "../../../../model/Office";
import {CompanyUpdateDto} from "../../../../model/CompanyUpdateDto";
import {Car} from "../../../../model/Car";
import {CarService} from "../../../../service/car.service";

@Component({
  selector: 'app-office-detail',
  templateUrl: './office-detail.component.html',
  styleUrls: ['./office-detail.component.scss']
})
export class OfficeDetailComponent {
  elements: DetailElement[];
  updateElement: UpdateFormElement;
  modalVisible: boolean;
  modalHeader: string;
  cars: Car[];
  employees: Employee[];

  constructor(private activatedRoute: ActivatedRoute,
              private service: OfficeService,
              private carService: CarService,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.modalVisible = false;
    this.loadElements();
    this.loadCars();
    this.loadEmployees();
  }

  showEditModal(element: DetailElement) {
    this.modalHeader = 'edit: ' + element.title;
    this.updateElement = new UpdateFormElement(element.value, element.name);
    this.modalVisible = true;
  }

  onSubmit() {
    let updateDto: UpdateDto = this.createUpdateDto();
    this.updateObjectAndRefreshDisplay(updateDto);
    this.modalVisible = false;
  }

  private loadElements() {
    let id = this.getObjectId();
    this.getObjectAndCreateElements(id);
  }

  private getObjectId() {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getObjectAndCreateElements(id: number) {
    this.service.findById(id).subscribe(data => {
      this.createElements(data);
    })
  }

  private createElements(office: Office) {
    this.elements = [
      new DetailElement('id', office.id, false, 'id'),
      new DetailElement('Zip Code', office.address.zipCode, true, 'zipCode'),
      new DetailElement('Town', office.address.town, true, 'town'),
      new DetailElement('Street', office.address.street, true, 'street'),
      new DetailElement('HouseNumber', office.address.houseNumber, true, 'houseNumber'),
    ]
  }

  private createUpdateDto() {
    let addressFieldNames = ['zipCode', 'town', 'street', 'houseNumber']
    if (addressFieldNames.includes(this.updateElement.name)) {
      return this.createUpdateDtoWithAddress();
    } else {
      return this.createUpdateDtoWithBasicField();
    }
  }

  private createUpdateDtoWithBasicField() {
    let o = Object.defineProperty({}, this.updateElement.name, {
      value: this.updateElement.value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
    return (o as CompanyUpdateDto)
  }

  private createUpdateDtoWithAddress() {
    return {
      address:
        {
          zipCode: this.getAddressAfterModification('zipCode'),
          town: this.getAddressAfterModification('town'),
          street: this.getAddressAfterModification('street'),
          houseNumber: this.getAddressAfterModification('houseNumber'),
        }
    };
  }

  getAddressAfterModification(name: string) {
    return this.updateElement.name === name ? this.updateElement.value : this.elements.find(e => e.name === name)?.value;
  }

  private updateObjectAndRefreshDisplay(dto: UpdateDto) {
    let id = this.getObjectId()
    this.service.update(id, dto).subscribe(
      data => {
        this.createElements(data);
      }
    );
  }

  private loadCars() {
    this.carService.findByCurrentBranchOfficeId(this.getObjectId()).subscribe(data => {
      this.cars = data;
    })
  }

  private loadEmployees() {
    this.employeeService.findByBranchOfficeId(this.getObjectId()).subscribe(data => {
      this.employees = data;
    })
  }
}
