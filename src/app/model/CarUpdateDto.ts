import {UpdateDto} from "./interfaces/UpdateDto";

export interface CarUpdateDto extends UpdateDto {
  id?: number;
  make?: string;
  model?: string;
  mileage?: number;
  minRentalTime?: number;
  yearOfManufacture?: number;
  bodyType?: string;
  color?: string;
  status?: string;
  currentBranchOfficeId?: number;
}
