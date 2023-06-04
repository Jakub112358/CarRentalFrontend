import {Address} from "../../address";
import {UpdateDto} from "./update-dto";

export interface CompanyUpdateRequest extends UpdateDto{
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
