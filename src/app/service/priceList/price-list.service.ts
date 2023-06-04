import { Injectable } from '@angular/core';
import {CrudService} from "../crud-service";
import {PriceList} from "../../model/price-list";
import {HttpClient} from "@angular/common/http";
import {ApiConstraints} from "../../config/apiConstraints";

@Injectable({
  providedIn: 'root'
})
export class PriceListService extends CrudService<PriceList>{
  constructor(http: HttpClient) {
    super(ApiConstraints.PRICE_LIST_URL, http);
  }
}
