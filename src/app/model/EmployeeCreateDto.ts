import {CreateDto} from "./interfaces/CreateDto";

export interface EmployeeCreateDto extends CreateDto{
  firstName: string;
  lastName: string;
  jobPosition: string;
  branchOfficeId: number;
}
