import {Component} from '@angular/core';
import {Company} from "../../../model/Company";
import {Address} from "../../../model/Address";
import {CompanyService} from "../../../service/company.service";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FormControl} from "@angular/forms";
import {CompanyUpdateDto} from "../../../model/CompanyUpdateDto";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  company: Company;
  displayElementsCompany: string[][];
  displayElementsAddress: string[][];
  image: SafeUrl;
  modalVisible: boolean;
  modalHeader: string;
  inputValue: any;
  fieldNames: string[];
  updateField: FormControl;
  activeFieldName: string;

  //TODO: temporal company id. In next version it would be provided from logged user info
  companyId: number;

  constructor(private companyService: CompanyService,
              private sanitizer: DomSanitizer) {
    this.companyId = 1;
  }

  ngOnInit() {
    this.modalVisible = false;
    this.fieldNames = ['Name', 'Domain', 'Logotype', 'Zip code', 'Town', 'Street', 'House number']
    this.companyService.findById(this.companyId)
      .subscribe(data => {
        this.company = data;
        this.refreshDisplay(this.company);
      })
  }

  showEditModal(fieldName: string) {
    this.modalHeader = 'edit: ' + fieldName;
    this.modalVisible = true;
    this.activeFieldName = fieldName;

    switch (fieldName) {
      case this.fieldNames[0]:
        this.inputValue = this.company.name;
        break;
      case this.fieldNames[1]:
        this.inputValue = this.company.domain;
        break;
      case this.fieldNames[2]:
        this.inputValue = this.company.logotype;
        break;
      case this.fieldNames[3]:
        this.inputValue = this.company.address.zipCode;
        break;
      case this.fieldNames[4]:
        this.inputValue = this.company.address.town;
        break;
      case this.fieldNames[5]:
        this.inputValue = this.company.address.street;
        break;
      case this.fieldNames[6]:
        this.inputValue = this.company.address.houseNumber;
        break;
    }

  }

  onSubmit() {
    let updateCompany: CompanyUpdateDto = this.createUpdateCompanyInstance()
    this.companyService.updateCompany(this.companyId, updateCompany).subscribe(
      data => {
        this.company = data;
        this.refreshDisplay(this.company);
      }
    );
    this.modalVisible = false;
  }

  createUpdateCompanyInstance(): CompanyUpdateDto {
    switch (this.activeFieldName) {
      case this.fieldNames[0]:
        return {name: this.inputValue};
      case this.fieldNames[1]:
        return {domain: this.inputValue};
      case this.fieldNames[2]:
        return {logotype: this.inputValue};

      case this.fieldNames[3]:
        return {
          address:
            {
              zipCode: this.inputValue,
              town: this.company.address.town,
              street: this.company.address.street,
              houseNumber: this.company.address.houseNumber
            }
        };
      case this.fieldNames[4]:
        return {
          address:
            {
              zipCode: this.company.address.zipCode,
              town: this.inputValue,
              street: this.company.address.street,
              houseNumber: this.company.address.houseNumber
            }
        };
      case this.fieldNames[5]:
        return {
          address:
            {
              zipCode: this.company.address.zipCode,
              town: this.company.address.town,
              street: this.inputValue,
              houseNumber: this.company.address.houseNumber
            }
        };
      case this.fieldNames[6]:
        return {
          address:
            {
              zipCode: this.company.address.zipCode,
              town: this.company.address.town,
              street: this.company.address.street,
              houseNumber: this.inputValue
            }
        };
      default:
        throw new Error('internal error')
    }
  }

  private refreshDisplay(company: Company) {
    this.refreshDisplayCompanyBaseFields(company);
    this.refreshDisplayCompanyAddress(company.address != null ? company.address : this.createEmptyAddress())
    this.refreshLogotype(company.logotype);
  }

  private refreshDisplayCompanyBaseFields(company: Company) {
    this.displayElementsCompany = [
      [this.fieldNames[0], company.name],
      [this.fieldNames[1], company.domain],
    ]
  }

  private refreshDisplayCompanyAddress(address: Address) {
    this.displayElementsAddress = [
      [this.fieldNames[3], address.zipCode],
      [this.fieldNames[4], address.town],
      [this.fieldNames[5], address.street],
      [this.fieldNames[6], address.houseNumber]
    ]
  }

  private createEmptyAddress(): Address {
    return {zipCode: '', town: '', houseNumber: '', street: ''}
  }

  private refreshLogotype(logotype: Int8Array) {
    let objectURL = 'data:image/png;base64,' + logotype;
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

}
