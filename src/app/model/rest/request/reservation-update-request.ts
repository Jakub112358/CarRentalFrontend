import {UpdateDto} from "./update-dto/UpdateDto";

export class ReservationUpdateRequest implements UpdateDto {
  status: string;

  constructor(status: string) {
    this.status = status;
  }
}
