import {CreateDto} from "./interfaces/CreateDto";

export interface CarCreateDto extends CreateDto {
  make: string;
  model: string;
  mileage: number;
  minRentalTime: number;
  yearOfManufacture: number;
  bodyType: string;
  color: string;
  status: string;
  currentBranchOfficeId: number;
}
