import {Injectable} from "@angular/core";
import {BodyType} from "../../model/enumeration/body-type";
import {Color} from "../../model/enumeration/color";
import {Status} from "../../model/enumeration/status";
import {OfficeService} from "../../service/office/office.service";
import {Office} from "../../model/office";

@Injectable({
  providedIn: 'root'
})
export class CarValidator {
  offices: Office[];

  constructor(private officeService: OfficeService) {
    this.loadAllOffices();
  }


  public validateCarWithPartialResults(car: any): boolean[] {
    return [
      this.validateMake(car.make),
      this.validateModel(car.model),
      this.validateMileage(car.mileage),
      this.validateMinRentalTime(car.minRentalTime),
      this.validateYearOfManufacture(car.yearOfManufacture),
      this.validateBodyType(car.bodyType),
      this.validateColor(car.color),
      this.validateStatus(car.status),
      this.validateOffice(car.currentBranchOfficeId)
    ]
  }

  public validateMake(make: string) {
    return make.length > 0;
  }

  public validateModel(model: string) {
    return model.length > 0;
  }

  public validateMileage(mileage: number) {
    return mileage > 0;
  }

  public validateMinRentalTime(minRentalTime: number) {
    return minRentalTime > 0;
  }

  public validateYearOfManufacture(yearOfManufacture: number) {
    return yearOfManufacture > 1900 && yearOfManufacture < 2025;
  }

  public validateBodyType(bodyType: string) {
    let bodyTypes: any[] = Object.values(BodyType);
    return bodyTypes.includes(bodyType);
  }

  public validateColor(color: string) {
    let colors: any[] = Object.values(Color)
    return colors.includes(color);
  }

  public validateStatus(status: string) {
    let statuses: any[] = Object.values(Status)
    return statuses.includes(status);
  }

  public validateOffice(currentBranchOfficeId: number) {
    return this.offices.map(o => o.id).includes(currentBranchOfficeId);
  }

  private loadAllOffices() {
    this.officeService.findAll()
      .subscribe(data => {
        this.offices = data;
      })
  }

}
