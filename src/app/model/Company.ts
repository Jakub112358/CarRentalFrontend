import {Address} from "./Address";

export interface Company{
  id: number;
  name: string;
  domain: string;
  logotype: Int8Array;
  address: Address;

}
