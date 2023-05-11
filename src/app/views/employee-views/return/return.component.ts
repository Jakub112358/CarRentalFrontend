import {Component} from '@angular/core';
import {CarReturn} from "../../../model/car-return";
import {ReturnService} from "../../../service/return.service";

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

  //TODO: branch office id should be provided by logged employee
  //TODO: how to refactor this style to css?

  ngOnInit() {
    this.returnService.findAllByOffice_Id(1).subscribe(data => {
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
