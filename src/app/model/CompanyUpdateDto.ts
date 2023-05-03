import {Address} from "./Address";
import {UpdateDto} from "./interfaces/UpdateDto";

export interface CompanyUpdateDto extends UpdateDto{
  id?: number;
  name?: string;
  domain?: string;
  logotype?: Int8Array;
  address?: Address;

}
