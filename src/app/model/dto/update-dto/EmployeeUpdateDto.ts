import {UpdateDto} from "./UpdateDto";

export interface EmployeeUpdateDto extends UpdateDto {
  firstName?: string;
  lastName?: string;
  jobPosition?: string;
  branchOfficeId?: number;
}
