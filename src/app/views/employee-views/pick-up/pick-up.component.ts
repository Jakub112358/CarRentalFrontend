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

  ngOnInit() {
    this.pickUpService.findAll().subscribe(data => {
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
