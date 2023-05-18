import {CreateDto} from "./create-dto";

export interface CarCreateDto extends CreateDto {
  make: string;
  model: string;
  mileage: number;
  minRentalTime: number;
  yearOfManufacture: number;
  bodyType: string;
  color: string;
  status: string;
  pricelistId: number;
  currentBranchOfficeId: number;
}
