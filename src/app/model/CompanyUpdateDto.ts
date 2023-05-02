import {Address} from "./Address";
import {UpdateDto} from "./UpdateDto";

export interface CompanyUpdateDto extends UpdateDto{
  id?: number;
  name?: string;
  domain?: string;
  logotype?: Int8Array;
  address?: Address;

}
