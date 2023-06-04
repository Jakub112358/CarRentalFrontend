import {Component} from '@angular/core';
import {Office} from "../../../../model/office";
import {OfficeService} from "../../../../service/office/office.service";

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent {
  offices: Office[];

  constructor(
    private officeService: OfficeService
  ) {

  }

  ngOnInit() {
    this.officeService.findAll().subscribe(data => {
        this.offices = data;
      })
  }
}
