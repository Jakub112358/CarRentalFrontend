import {Component} from '@angular/core';
import {PanelElement} from "../../../model/template-elements/panel-element";
import {NotificationService} from "../../../service/notification/notification.service";

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent {
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
