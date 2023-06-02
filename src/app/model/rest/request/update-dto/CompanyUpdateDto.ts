import {Address} from "../../../address";
import {UpdateDto} from "./UpdateDto";

export interface CompanyUpdateDto extends UpdateDto{
  name: string;
  domain: string;
  logotype: Int8Array;
  address: Address;
  differentOfficesExtraCharge: number;
  mediumTermRentMinDays: number;
  longTermRentMinDays: number;
  freeCancellationDaysLimit: number;
  lateCancellationRatio: number;

}
