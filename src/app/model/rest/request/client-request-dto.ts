import {AddressCreateRequest} from "./create/address-create-request";
import {Address} from "../../address";

export class ClientRequestDto {
  email: string;
  password: string
  firstName: string;
  lastName: string;
  address: Address;


  constructor(email: string, password: string, firstName: string, lastName: string, address: AddressCreateRequest) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}
