import {Component} from '@angular/core';
import {CarReturn} from "../../../model/car-return";
import {ReturnService} from "../../../service/return/return.service";

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent {
  carReturns: CarReturn[];
  selectedReturn: CarReturn;


  constructor(private returnService: ReturnService) {
  }

  ngOnInit() {
    this.returnService.findAll().subscribe(data => {
      this.carReturns = data;
    })
  }

  onSelectEdit(carReturn: CarReturn) {
    this.selectedReturn = carReturn;
  }

  updateReturn($event: CarReturn) {
    let index = this.carReturns.findIndex(cr => cr.id === $event.id)
    this.carReturns[index] = $event;
  }

}
