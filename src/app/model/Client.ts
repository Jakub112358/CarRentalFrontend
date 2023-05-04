import {Address} from "./Address";

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
}
