import {Component} from '@angular/core';
import {Company} from "../../../model/Company";
import {CompanyService} from "../../../service/company.service";
import {DomSanitizer} from '@angular/platform-browser';
import {CompanyUpdateDto} from "../../../model/CompanyUpdateDto";
import {DetailElement} from "../../../model/templateElements/DetailElement";
import {UpdateFormElement} from "../../../model/templateElements/UpdateFormElement";

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
    let id = this.getCompanyId();
    this.getCompanyAndCreateElements(id);
  }

  //TODO: temporal company id. In next version it would be provided from logged user info
  private getCompanyId() {
    return 1;
  }

  private getCompanyAndCreateElements(id: number) {
    this.companyService.findById(id).subscribe(data => {
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
    ]
  }

  private getPictureSafeUrl(logotype: Int8Array) {
    let objectURL = 'data:image/png;base64,' + logotype;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  private createUpdateDto() {
    if (this.updateElement.name === 'zipCode' || this.updateElement.name === 'town' || this.updateElement.name === 'street' || this.updateElement.name === 'houseNumber') {
      return this.createUpdateDtoWithAddress();
    } else {
      return this.createUpdateDtoWithBasicField();
    }
  }

  private createUpdateDtoWithBasicField() {
    let o = Object.defineProperty({}, this.updateElement.name, {
      value: this.updateElement.value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
    return (o as CompanyUpdateDto)
  }

  private createUpdateDtoWithAddress() {
    return {
      address:
        {
          zipCode: this.updateElement.name === 'zipCode' ? this.updateElement.value : this.elements.find(e => e.name === 'zipCode')?.value,
          town: this.updateElement.name === 'town' ? this.updateElement.value : this.elements.find(e => e.name === 'town')?.value,
          street: this.updateElement.name === 'street' ? this.updateElement.value : this.elements.find(e => e.name === 'street')?.value,
          houseNumber: this.updateElement.name === 'houseNumber' ? this.updateElement.value : this.elements.find(e => e.name === 'houseNumber')?.value,
        }
    };
  }

  private updateCompanyAndRefreshDisplay(dto: CompanyUpdateDto) {
    let id = this.getCompanyId();
    this.companyService.update(id, dto).subscribe(
      data => {
        this.createElements(data);
      }
    );
  }
}
