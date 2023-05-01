import {Address} from "./Address";

export interface CompanyUpdate{
  id?: number;
  name?: string;
  domain?: string;
  logotype?: Int8Array;
  address?: Address;

}
