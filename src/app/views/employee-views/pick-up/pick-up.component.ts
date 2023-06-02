import { Component } from '@angular/core';
import {PickUp} from "../../../model/pick-up";
import {PickUpService} from "../../../service/pick-up/pick-up.service";

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss']
})
export class PickUpComponent {
  pickUps: PickUp[];
  selectedPickUp: PickUp;

  constructor(private pickUpService: PickUpService) {
  }

  //TODO: branch office id should be provided by logged employee
  //TODO: how to refactor this style to css?
  ngOnInit() {
    this.pickUpService.findAllByOffice_Id(1).subscribe(data => {
      this.pickUps = data;
    })
  }

  onSelectEdit(pickUp: PickUp) {
    this.selectedPickUp = pickUp;
  }

  updatePickUp($event: PickUp) {
    let index = this.pickUps.findIndex(p => p.id === $event.id)
    this.pickUps[index] = $event;
  }
}
