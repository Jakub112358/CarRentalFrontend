import {Component} from '@angular/core';
import {Office} from "../../../../model/Office";
import {OfficeService} from "../../../../service/office.service";

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent {
  offices: Office[];
  companyId: number;

  constructor(
    private officeService: OfficeService
  ) {
    //TODO: temporal company id. In next version it would be provided from logged user info
    this.companyId = 1;
  }

  ngOnInit() {
    this.officeService.findAll().subscribe(data => {
        this.offices = data;
      })
  }
}
