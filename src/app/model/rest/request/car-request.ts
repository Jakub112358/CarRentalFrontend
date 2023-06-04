import {UpdateDto} from "./update-dto";
import {CreateDto} from "./create-dto";

export class CarRequest implements UpdateDto, CreateDto {
  make: string;
  model: string;
  mileage: number;
  minRentalTime: number;
  yearOfManufacture: number;
  bodyType: string;
  color: string;
  status: string;
  priceListId: number;
  currentOfficeId: number;


  constructor(make: string, model: string, mileage: number, minRentalTime: number, yearOfManufacture: number, bodyType: string, color: string, status: string, priceListId: number, currentOfficeId: number) {
    this.make = make;
    this.model = model;
    this.mileage = mileage;
    this.minRentalTime = minRentalTime;
    this.yearOfManufacture = yearOfManufacture;
    this.bodyType = bodyType;
    this.color = color;
    this.status = status;
    this.priceListId = priceListId;
    this.currentOfficeId = currentOfficeId;
  }
}
