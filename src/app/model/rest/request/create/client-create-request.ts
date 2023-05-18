import {AddressCreateRequest} from "./address-create-request";

export class ClientCreateRequest {
  email: string;
  password: string
  firstName: string;
  lastName: string;
  address: AddressCreateRequest;

  constructor() {
    this.address = new AddressCreateRequest();
  }
}
