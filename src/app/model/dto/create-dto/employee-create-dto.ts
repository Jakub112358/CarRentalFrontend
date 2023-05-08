import {CreateDto} from "./create-dto";

export interface EmployeeCreateDto extends CreateDto{
  firstName: string;
  lastName: string;
  jobPosition: string;
  branchOfficeId: number;
}
