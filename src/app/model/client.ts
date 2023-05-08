import {Address} from "./address";

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
}
