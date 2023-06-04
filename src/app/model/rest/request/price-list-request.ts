import {UpdateDto} from "./update-dto";
import {CreateDto} from "./create-dto";

export class PriceListRequest implements UpdateDto, CreateDto {
  shortTermPrice: number;
  mediumTermPrice: number;
  longTermPrice: number;


  constructor(shortTermPrice: number, mediumTermPrice: number, longTermPrice: number) {
    this.shortTermPrice = shortTermPrice;
    this.mediumTermPrice = mediumTermPrice;
    this.longTermPrice = longTermPrice;
  }
}
