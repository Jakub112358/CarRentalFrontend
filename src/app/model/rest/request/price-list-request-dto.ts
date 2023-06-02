import {UpdateDto} from "./update-dto/UpdateDto";
import {CreateDto} from "./create/create-dto";

export class PriceListRequestDto implements UpdateDto, CreateDto {
  shortTermPrice: number;
  mediumTermPrice: number;
  longTermPrice: number;


  constructor(shortTermPrice: number, mediumTermPrice: number, longTermPrice: number) {
    this.shortTermPrice = shortTermPrice;
    this.mediumTermPrice = mediumTermPrice;
    this.longTermPrice = longTermPrice;
  }
}
