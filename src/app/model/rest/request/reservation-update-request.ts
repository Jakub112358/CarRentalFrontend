import {UpdateDto} from "./update-dto";

export class ReservationUpdateRequest implements UpdateDto {
  status: string;

  constructor(status: string) {
    this.status = status;
  }
}
