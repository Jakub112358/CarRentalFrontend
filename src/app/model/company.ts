import {Address} from "./address";

export interface Company {
  id: number;
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
