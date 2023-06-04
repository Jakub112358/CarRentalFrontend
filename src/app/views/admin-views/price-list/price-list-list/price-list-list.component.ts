import {Component} from '@angular/core';
import {PriceList} from "../../../../model/price-list";
import {PriceListService} from "../../../../service/priceList/price-list.service";

@Component({
  selector: 'app-price-list-list',
  templateUrl: './price-list-list.component.html',
  styleUrls: ['./price-list-list.component.scss']
})
export class PriceListListComponent {

  priceLists: PriceList[];

  constructor(
    private priceListService: PriceListService
  ) {
  }

  ngOnInit() {
    this.priceListService.findAll().subscribe(data => {
      this.priceLists = data;
    })
  }


}
