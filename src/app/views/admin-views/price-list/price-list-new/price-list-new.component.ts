import {Component} from '@angular/core';
import {CreateFormElement} from "../../../../model/template-elements/create-form-element";
import {PriceListService} from "../../../../service/priceList/price-list.service";
import {PriceListRequest} from "../../../../model/rest/request/price-list-request";

@Component({
  selector: 'app-price-list-new',
  templateUrl: './price-list-new.component.html',
  styleUrls: ['./price-list-new.component.scss']
})
export class PriceListNewComponent {

  successModalVisible: boolean;
  addedPriceListPath: string;
  elements: CreateFormElement[];
  failModalVisible: boolean;

  constructor(
    private priceListService: PriceListService,
  ) {
  }

  ngOnInit() {
    this.loadFormElements();
  }

  onSubmit() {
    this.saveNewPriceList();
  }

  addNextPriceList() {
    this.loadFormElements();
    this.successModalVisible = false;
  }

  private saveNewPriceList() {
    let priceList: PriceListRequest = this.mapFormElementsToPriceListDto();
    this.priceListService.save(priceList).subscribe(data => {
      if (data) {
        this.successModalVisible = true;
        this.addedPriceListPath = '/admin/price-list/' + data.id;
      } else {
        this.failModalVisible = true;
      }
    })
  }

  private loadFormElements() {
    this.createFormElements();
  }

  private createFormElements() {
    this.elements = [
      new CreateFormElement('short term price', 'number', 0, 'shortTermPrice', true, 'invalid short term price'),
      new CreateFormElement('medium term price', 'number', 0, 'mediumTermPrice', true, 'invalid medium term price'),
      new CreateFormElement('long term price', 'number', 0, 'longTermPrice', true, 'invalid long term price'),]
  }

  private mapFormElementsToPriceListDto() {
    let shortTermPrice = this.elements.find(e => e.name === 'shortTermPrice')?.model;
    let mediumTermPrice = this.elements.find(e => e.name === 'mediumTermPrice')?.model;
    let longTermPrice = this.elements.find(e => e.name === 'longTermPrice')?.model;

    return new PriceListRequest(shortTermPrice, mediumTermPrice, longTermPrice);
  }

}
