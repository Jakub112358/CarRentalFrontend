import {Component} from '@angular/core';
import {UpdateFormElement} from "../../../../model/template-elements/update-form-element";
import {DetailElement} from "../../../../model/template-elements/detail-element";
import {ActivatedRoute, Router} from "@angular/router";
import {UpdateDto} from "../../../../model/rest/request/update-dto/UpdateDto";
import {PriceList} from "../../../../model/price-list";
import {PriceListService} from "../../../../service/priceList/price-list.service";
import {PriceListRequestDto} from "../../../../model/rest/request/price-list-request-dto";

@Component({
  selector: 'app-price-list-detail',
  templateUrl: './price-list-detail.component.html',
  styleUrls: ['./price-list-detail.component.scss']
})
export class PriceListDetailComponent {


  priceList: PriceList;
  updateElement: UpdateFormElement;
  updateModalVisible: boolean;
  deleteModalVisible: boolean;
  modalHeader: string;
  elements: DetailElement[];

  constructor(private activatedRoute: ActivatedRoute,
              private priceListService: PriceListService,
              private router: Router) {
  }

  ngOnInit() {
    this.updateModalVisible = false;
    this.loadElements();
  }

  showEditModal(element: DetailElement) {
    this.modalHeader = 'edit: ' + element.title;
    this.updateElement = new UpdateFormElement(element.value, element.name);
    this.updateModalVisible = true;
  }

  showDeleteModal() {
    this.deleteModalVisible = true;
  }

  onSubmit() {
    let priceListUpdateDto: PriceListRequestDto = this.createUpdateDto();
    this.updatePriceListAndRefreshDisplay(priceListUpdateDto);
    this.updateModalVisible = false;
  }

  deletePriceList() {
    this.priceListService.delete(this.getId()).subscribe(() =>
      this.router.navigateByUrl('/admin/car')
    );
  }


  private loadElements() {
    let id = this.getId();
    this.getPriceListAndCreateElements(id);
  }

  private getId() {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getPriceListAndCreateElements(id: number) {
    this.priceListService.findById(id).subscribe(data => {
      this.priceList = data;
      this.createElements(data);
    })
  }

  private createElements(plist: PriceList) {
    this.elements = [
      new DetailElement('id', plist.id, false, 'id'),
      new DetailElement('short term rent price per day', plist.shortTermPrice, true, 'shortTermPrice'),
      new DetailElement('medium term rent price per day', plist.mediumTermPrice, true, 'mediumTermPrice'),
      new DetailElement('long term rent price per day', plist.longTermPrice, true, 'longTermPrice'),
    ]
  }

  private createUpdateDto() {
    let updateDto = this.priceList as PriceListRequestDto;
    let changedField = Object.defineProperty({}, this.updateElement.name, {
      value: this.updateElement.value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
    return Object.assign(updateDto, changedField);
  }

  private updatePriceListAndRefreshDisplay(dto: UpdateDto) {
    let id = this.getId()
    this.priceListService.update(id, dto).subscribe(
      data => {
        this.createElements(data);
      }
    );
  }
}
