import {UpdateDto} from "./update-dto";
import {CreateDto} from "./create-dto";
import {Address} from "../../address";

export class OfficeRequest implements UpdateDto, CreateDto {
  address: Address;

  constructor(address: Address) {
    this.address = address;
  }
}
