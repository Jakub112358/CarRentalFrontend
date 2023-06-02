import {Component} from '@angular/core';
import {Company} from "../../../model/company";
import {CompanyService} from "../../../service/company/company.service";
import {DomSanitizer} from '@angular/platform-browser';
import {CompanyUpdateDto} from "../../../model/rest/request/update-dto/CompanyUpdateDto";
import {DetailElement} from "../../../model/template-elements/detail-element";
import {UpdateFormElement} from "../../../model/template-elements/update-form-element";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  elements: DetailElement[];
  updateElement: UpdateFormElement;
  modalVisible: boolean;
  modalHeader: string;
  company: Company;

  constructor(private companyService: CompanyService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.modalVisible = false;
    this.loadElements();
  }

  showEditModal(element: DetailElement) {
    this.modalHeader = 'edit: ' + element.title;
    this.updateElement = new UpdateFormElement(element.value, element.name);
    this.modalVisible = true;
  }

  onSubmit() {
    let companyUpdateDto: CompanyUpdateDto = this.createUpdateDto();
    this.updateCompanyAndRefreshDisplay(companyUpdateDto);
    this.modalVisible = false;
  }


  private loadElements() {
    this.getCompanyAndCreateElements();
  }

  private getCompanyAndCreateElements() {
    this.companyService.findCompany().subscribe(data => {
      this.company = data;
      this.createElements(data);
    })
  }

  private createElements(company: Company) {
    let pictureSafeUrl = this.getPictureSafeUrl(company.logotype)
    this.elements = [
      new DetailElement('Name', company.name, true, 'name'),
      new DetailElement('Domain', company.domain, true, 'domain'),
      new DetailElement('Logotype', pictureSafeUrl, false, 'logotype', true),
      new DetailElement('Zip Code', company.address.zipCode, true, 'zipCode'),
      new DetailElement('Town', company.address.town, true, 'town'),
      new DetailElement('Street', company.address.street, true, 'street'),
      new DetailElement('HouseNumber', company.address.houseNumber, true, 'houseNumber'),
      new DetailElement('Different offices extra charge', company.differentOfficesExtraCharge, true, 'differentOfficesExtraCharge'),
      new DetailElement('medium term rent min days', company.mediumTermRentMinDays, true, 'mediumTermRentMinDays'),
      new DetailElement('long term rent min days', company.longTermRentMinDays, true, 'longTermRentMinDays'),
    ]
  }

  private getPictureSafeUrl(logotype: Int8Array) {
    let objectURL = 'data:image/png;base64,' + logotype;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  private createUpdateDto() {
    let updateDto = this.company as CompanyUpdateDto;
    let changedField = Object.defineProperty({}, this.updateElement.name, {
      value: this.updateElement.value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
    updateDto.address.id = 0;
    if (this.updateElement.name === 'zipCode' ||
      this.updateElement.name === 'town' ||
      this.updateElement.name === 'street' ||
      this.updateElement.name === 'houseNumber') {
      updateDto.address = Object.assign(updateDto.address, changedField);
    } else {
      updateDto = Object.assign(updateDto, changedField);
    }
    return updateDto;
  }

  private updateCompanyAndRefreshDisplay(dto: CompanyUpdateDto) {
    this.companyService.update(dto).subscribe(
      data => {
        this.createElements(data);
      }
    );
  }
}
