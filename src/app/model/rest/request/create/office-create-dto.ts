import {Address} from "../../../address";
import {CreateDto} from "./create-dto";

export class OfficeCreateDto implements CreateDto{

  address: Address;

  constructor(address: Address) {
    this.address = address;
  }
}
