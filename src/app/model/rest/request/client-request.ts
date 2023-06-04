import {Address} from "../../address";

export class ClientRequest {
  email: string;
  password: string
  firstName: string;
  lastName: string;
  address: Address;


  constructor(email: string, password: string, firstName: string, lastName: string, address: Address) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}
