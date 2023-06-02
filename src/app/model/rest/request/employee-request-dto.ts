import {UpdateDto} from "./update-dto/UpdateDto";

export class EmployeeRequestDto implements UpdateDto {
  firstName: string;
  lastName: string;
  jobPosition: string;
  officeId: number;
  email: string;
  password: string;


  constructor(firstName: string, lastName: string, jobPosition: string, officeId: number, email: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobPosition = jobPosition;
    this.officeId = officeId;
    this.email = email;
    this.password = password;
  }
}
