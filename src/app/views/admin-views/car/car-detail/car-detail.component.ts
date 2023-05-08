import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../../../model/car";
import {CarService} from "../../../../service/car.service";
import {CarUpdateDto} from "../../../../model/dto/update-dto/CarUpdateDto";

//TODO add pricelist!
//TODO refactor this component
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent {
  carId: number;
  displayElements: any[][];
  car: Car;
  modalVisible: boolean;
  modalHeader: string;
  inputValue: any;
  activeField: string;

  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarService) {
  }

  ngOnInit() {
    this.modalVisible = false;
    this.getCarId();
    this.getCarAndRefreshDisplay();
  }

  showEditModal(fieldName: string) {
    this.modalHeader = 'edit: ' + fieldName;
    this.modalVisible = true;
    this.activeField = fieldName;
    this.getInitialFormInputValue(fieldName);
  }

  onSubmit() {
    let updateCar: CarUpdateDto = this.createUpdateCarInstance()
    this.carService.update(this.carId, updateCar).subscribe(
      data => {
        this.car = data;
        this.refreshDisplay();
      }
    );
    this.modalVisible = false;
  }


  private getCarId() {
    this.carId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }


  private getCarAndRefreshDisplay() {
    this.carService.findById(this.carId)
      .subscribe(data => {
        this.car = data;
        this.refreshDisplay();
      })
  }

  private refreshDisplay() {
    let fieldNames: any[] = Object.values(CarFields);
    this.displayElements = [
      [fieldNames[0], this.car.id],
      [fieldNames[1], this.car.make],
      [fieldNames[2], this.car.model],
      [fieldNames[3], this.car.mileage],
      [fieldNames[4], this.car.minRentalTime],
      [fieldNames[5], this.car.yearOfManufacture],
      [fieldNames[6], this.car.bodyType],
      [fieldNames[7], this.car.color],
      [fieldNames[8], this.car.status],
      [fieldNames[9], this.car.currentBranchOfficeId]
    ]
  }

  private getInitialFormInputValue(field: string) {
    switch (field) {
      case CarFields.Id:
        this.inputValue = this.car.id;
        break;
      case CarFields.Make:
        this.inputValue = this.car.make;
        break;
      case CarFields.Model:
        this.inputValue = this.car.model;
        break;
      case CarFields.Mileage:
        this.inputValue = this.car.mileage;
        break;
      case CarFields.MinRentalTime:
        this.inputValue = this.car.minRentalTime;
        break;
      case CarFields.YearOfManufacture:
        this.inputValue = this.car.yearOfManufacture;
        break;
      case CarFields.BodyType:
        this.inputValue = this.car.bodyType;
        break;
      case CarFields.Color:
        this.inputValue = this.car.color;
        break;
      case CarFields.Status:
        this.inputValue = this.car.status;
        break;
      case CarFields.Office:
        this.inputValue = this.car.currentBranchOfficeId;
        break;
    }
  }

  private createUpdateCarInstance() {
    switch (this.activeField) {
      case CarFields.Id:
        return {id: this.inputValue};
      case CarFields.Make:
        return {make: this.inputValue};
      case CarFields.Model:
        return {model: this.inputValue};
      case CarFields.Mileage:
        return {mileage: this.inputValue};
      case CarFields.MinRentalTime:
        return {minRentalTime: this.inputValue};
      case CarFields.YearOfManufacture:
        return {yearOfManufacture: this.inputValue};
      case CarFields.BodyType:
        return {bodyType: this.inputValue};
      case CarFields.Color:
        return {color: this.inputValue};
      case CarFields.Status:
        return {status: this.inputValue};
      case CarFields.Office:
        return {currentBranchOfficeId: this.inputValue};
      default:
        throw new Error('internal error')
    }
  }
}

enum CarFields {
  Id = 'id',
  Make = 'make',
  Model = 'model',
  Mileage = 'mileage',
  MinRentalTime = 'min rental time',
  YearOfManufacture = 'year of manufacture',
  BodyType = 'body type',
  Color = 'color',
  Status = 'status',
  Office = 'current branch office'

}
