import {Address} from "./Address";

export interface CompanyUpdateDto {
  id?: number;
  name?: string;
  domain?: string;
  logotype?: Int8Array;
  address?: Address;

}
