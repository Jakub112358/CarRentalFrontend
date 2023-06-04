import {Component} from '@angular/core';
import {Address} from "../../../../model/address";
import {OfficeService} from "../../../../service/office/office.service";
import {OfficeRequest} from "../../../../model/rest/request/office-request";

@Component({
  selector: 'app-office-new',
  templateUrl: './office-new.component.html',
  styleUrls: ['./office-new.component.scss']
})
export class OfficeNewComponent {
  newAddress: Address;
  invalidZipCode: boolean;
  invalidTown: boolean;
  invalidStreet: boolean;
  invalidHouseNumber: boolean;
  successModalVisible: boolean;
  failModalVisible: boolean;
  addedOfficePath: string;

  constructor(private officeService: OfficeService) {
  }

  ngOnInit() {
    this.newAddress = {zipCode: '', town: '', street: '', houseNumber: ''};
    this.invalidZipCode = false;
    this.invalidTown = false;
    this.invalidStreet = false;
    this.invalidHouseNumber = false;
  }

  onSubmit() {
    this.validate(this.newAddress);
    if (!this.invalidZipCode && !this.invalidTown && !this.invalidStreet && !this.invalidHouseNumber) {
      let newOffice: OfficeRequest = new OfficeRequest(this.newAddress)
      this.officeService.save(newOffice).subscribe(data => {
        this.addedOfficePath = '/admin/office/' + data.id;
      });
      this.successModalVisible = true;
    } else {
      this.failModalVisible = true;
    }
  }

  addNextOffice() {
    this.newAddress = {zipCode: '', town: '', street: '', houseNumber: ''};
    this.successModalVisible = false;
  }

  private validate(address: Address) {
    this.validateZipCode(address.zipCode);
    this.validateTown(address.town);
    this.validateStreet(address.street);
    this.validateHouseNumber(address.houseNumber);
  }

  private validateZipCode(zipCode: string) {
    this.invalidZipCode = !zipCode.match(/^[0-9]{2}-[0-9]{3}$/);
  }

  private validateTown(town: string) {
    this.invalidTown = !(town.length > 1);
  }

  private validateStreet(street: string) {
    this.invalidStreet = !(street.length > 1);
  }

  private validateHouseNumber(houseNumber: string) {
    this.invalidHouseNumber = !houseNumber.match(/^[1-9]/);
  }
}
