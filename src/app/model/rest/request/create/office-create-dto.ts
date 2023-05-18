import {Address} from "../../../address";
import {CreateDto} from "./create-dto";

export interface OfficeCreateDto extends CreateDto{

  address: Address;
  companyId: number;
}
