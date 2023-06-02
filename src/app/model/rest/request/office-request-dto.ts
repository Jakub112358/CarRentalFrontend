import {UpdateDto} from "./update-dto/UpdateDto";
import {CreateDto} from "./create/create-dto";
import {Address} from "../../address";

export class OfficeRequestDto implements UpdateDto, CreateDto {
  address: Address;
}
