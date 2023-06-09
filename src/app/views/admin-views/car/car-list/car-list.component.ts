import { Component } from '@angular/core';
import {Car} from "../../../../model/car";
import {CarService} from "../../../../service/car/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  cars: Car[];

  constructor(
    private carService: CarService
  ) {
  }

  ngOnInit(){
    this.carService.findAll().subscribe(data => {
      this.cars = data;
    })
  }

}
