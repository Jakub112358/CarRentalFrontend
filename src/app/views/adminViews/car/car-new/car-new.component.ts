import {Component} from '@angular/core';
import {CarCreateDto} from "../../../../model/CarCreateDto";
import {Office} from "../../../../model/Office";
import {OfficeService} from "../../../../service/office.service";
import {CarService} from "../../../../service/car.service";

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.scss']
})
export class CarNewComponent {
  successModalVisible: boolean;
  failModalVisible: boolean;
  newCar: CarCreateDto;
  invalidInput: boolean[];
  invalidInputMessage: string[];
  addedCarPath: string;
  bodyTypes: any[];
  colors: any[];
  statuses: any[]
  offices: Office[];


  constructor(
    private officeService: OfficeService,
    private carService: CarService) {
  }

  ngOnInit() {
    this.resetNewCar()
    this.invalidInputMessage = [
      'invalid make',
      'invalid model',
      'mileage must be number > 0',
      'min rental time must be > 0',
      'year of manufacture must be > 1900 and < 2025',
      'invalid body type',
      'invalid color',
      'invalid status',
      'invalid current office branch id'
    ];
    this.invalidInput = [];
    for (let i = 0; i < 9; i++) {
      this.invalidInput.push(false);
    }
    this.bodyTypes = [
      'CITY_CAR',
      'SUPERMINI',
      'HATCHBACK',
      'MPV',
      'SEDAN',
      'ESTATE',
      'COUPE',
      'CROSSOVER',
      'SUV',
      'CABRIOLET'
    ]
    this.colors = [
      'BLACK',
      'WHITE',
      'RED',
      'GRAY',
      'BLUE',
      'YELLOW',
      'GREEN',
      'PINK',
      'ORANGE',
      'OTHER'
    ]
    this.statuses = [
      'AVAILABLE',
      'UNAVAILABLE',
      'RENTED'
    ]
    this.officeService.findAll()
      .subscribe(data => {
        this.offices = data;
      })
  }

  onSubmit() {
    this.validate(this.newCar)
    if (!this.invalidInput.includes(true)) {
      this.carService.save(this.newCar).subscribe(data => {
        this.addedCarPath = '/admin/car/' + data.id;
      })
      this.successModalVisible = true;
    } else {
      this.failModalVisible = true;
    }
  }

  addNextCar() {
    this.resetNewCar();
    this.successModalVisible = false;
  }

  private resetNewCar() {
    this.newCar = {
      make: '',
      model: '',
      mileage: 1,
      minRentalTime: 1,
      yearOfManufacture: 2000,
      bodyType: '',
      color: '',
      status: 'AVAILABLE',
      currentBranchOfficeId: 1
    };
  }

  public officeToString(office: Office): string {
    return ('id: ' + office.id + ', address: ' + office.address.zipCode + ' ' + office.address.town + ', ' + office.address.street + ' ' + office.address.houseNumber);
  }


  private validate(car: CarCreateDto) {
    this.validateMake(car.make);
    this.validateModel(car.model);
    this.validateMileage(car.mileage);
    this.validateMinRentalTime(car.minRentalTime);
    this.validateYearOfManufacture(car.yearOfManufacture);
    this.validateBodyType(car.bodyType);
    this.validateColor(car.color);
    this.validateStatus(car.status);
    this.validateOffice(car.currentBranchOfficeId);
  }

  private validateMake(make: string) {
    this.invalidInput[0] = make.length <= 0;
  }

  private validateModel(model: string) {
    this.invalidInput[1] = model.length <= 0;
  }

  private validateMileage(mileage: number) {
    this.invalidInput[2] = mileage <= 0;
  }

  private validateMinRentalTime(minRentalTime: number) {
    this.invalidInput[3] = minRentalTime <= 0;
  }

  private validateYearOfManufacture(yearOfManufacture: number) {
    this.invalidInput[4] = yearOfManufacture<=1900 || yearOfManufacture >= 2025;
  }

  private validateBodyType(bodyType: string) {
    this.invalidInput[5] = !this.bodyTypes.includes(bodyType);

  }

  private validateColor(color: string) {
    this.invalidInput[6] = !this.colors.includes(color);
  }

  private validateStatus(status: string) {
    this.invalidInput[7] = !this.statuses.includes(status);
  }

  private validateOffice(currentBranchOfficeId: number) {
    this.invalidInput[8] = !this.offices.map(o => o.id).includes(currentBranchOfficeId);
  }


}
