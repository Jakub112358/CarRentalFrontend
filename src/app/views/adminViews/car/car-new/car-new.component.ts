import {Component} from '@angular/core';
import {CarCreateDto} from "../../../../model/dto/createDto/CarCreateDto";
import {Office} from "../../../../model/Office";
import {OfficeService} from "../../../../service/office.service";
import {CarService} from "../../../../service/car.service";
import {Color} from "../../../../model/enumeration/Color";
import {BodyType} from "../../../../model/enumeration/BodyType";
import {Status} from "../../../../model/enumeration/Status";
import {CarValidator} from "../../../../util/validator/CarValidator";
//TODO add pricelist!
//TODO refactor like other components
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
    private carService: CarService,
    private carValidator: CarValidator,
  ) {
  }

  ngOnInit() {
    this.resetNewCar()
    this.loadInvalidInputMessages();
    this.loadInvalidInputFlags();
    this.loadAllOffices();
    this.loadEnumValues();
  }

  onSubmit() {
    this.invalidInput = this.carValidator.validateCarWithPartialResults(this.newCar).map(v => !v);
    if (!this.invalidInput.includes(true)) {
      this.saveNewCar();
      this.successModalVisible = true;
    } else {
      this.failModalVisible = true;
    }
  }

  addNextCar() {
    this.resetNewCar();
    this.successModalVisible = false;
  }

  public officeToString(office: Office): string {
    return ('id: ' + office.id + ', address: ' + office.address.zipCode + ' ' + office.address.town + ', ' + office.address.street + ' ' + office.address.houseNumber);
  }

  private loadInvalidInputMessages() {
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
  }

  private loadInvalidInputFlags() {
    this.invalidInput = [];
    for (let i = 0; i < 9; i++) {
      this.invalidInput.push(false);
    }
  }

  private loadAllOffices() {
    this.officeService.findAll()
      .subscribe(data => {
        this.offices = data;
      })
  }

  private loadEnumValues() {
    this.bodyTypes = Object.values(BodyType)
    this.colors = Object.values(Color);
    this.statuses = Object.values(Status)
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
      pricelistId: 1,
      currentBranchOfficeId: 1
    };
  }

  private saveNewCar() {
    this.carService.save(this.newCar).subscribe(data => {
      this.addedCarPath = '/admin/car/' + data.id;
    })
  }
}
