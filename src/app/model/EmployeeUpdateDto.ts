import {UpdateDto} from "./interfaces/UpdateDto";

export interface EmployeeUpdateDto extends UpdateDto {
  firstName?: string;
  lastName?: string;
  jobPosition?: string;
  branchOfficeId?: number;
}
