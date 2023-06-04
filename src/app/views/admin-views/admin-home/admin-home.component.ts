import {Component} from '@angular/core';
import {PanelElement} from "../../../model/template-elements/panel-element";
import {NotificationService} from "../../../service/notification/notification.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  elements: PanelElement[];

  constructor(private msgService: NotificationService) {
  }

  ngOnInit() {
    this.loadDataAndCreatePanels()
  }


  private loadDataAndCreatePanels() {
    this.msgService.findAllByRecipient().subscribe(data => {
      this.elements = data.map(msg => new PanelElement(msg.title, msg.content));
    })
  }
}
