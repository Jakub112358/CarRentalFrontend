import {Address} from "./Address";
import {CreateDto} from "./CreateDto";

export interface OfficeCreateDto extends CreateDto{

  address: Address;
  companyId: number;
}