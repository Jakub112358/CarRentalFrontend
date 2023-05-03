import {Address} from "./Address";
import {CreateDto} from "./interfaces/CreateDto";

export interface OfficeCreateDto extends CreateDto{

  address: Address;
  companyId: number;
}
