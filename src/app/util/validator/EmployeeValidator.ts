import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EmployeeValidator {

  validateField(fieldName: string, model: any): boolean {
    switch (fieldName) {
      case 'firstName':
        return this.validateFirstName(model);
      case 'lastName':
        return this.validateLastName(model);
      case 'jobPosition':
        return this.validateJobPosition(model);
      case 'branchOfficeId':
        return this.validateOfficeId(model);
      default:
        return false;
    }
  }

  private validateFirstName(model: string) {
    return model.length > 0;
  }

  private validateLastName(model: string) {
    return model.length > 0;
  }

  private validateJobPosition(model: string) {
    return model.length > 0;
  }

  private validateOfficeId(model: number) {
    return model > 0;
  }


}
