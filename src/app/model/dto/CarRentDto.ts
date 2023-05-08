export interface CarRentDto {
  id: number;
  make: string;
  model: string;
  mileage: number;
  minRentalTime: number;
  yearOfManufacture: number;
  bodyType: string;
  color: string;
  status: string;
  priceListId: number;
  currentBranchOfficeId: number;
  price: number;
}
