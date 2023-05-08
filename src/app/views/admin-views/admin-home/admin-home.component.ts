import {Component} from '@angular/core';
import {PanelElement} from "../../../model/template-elements/panel-element";
import {MsgService} from "../../../service/msg.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  elements: PanelElement[];

  constructor(private msgService: MsgService) {
  }

  ngOnInit() {
    this.loadDataAndCreatePanels()
  }


  private loadDataAndCreatePanels() {
    this.msgService.findAllByRecipient('ADMIN').subscribe(data => {
      this.elements = data.map(msg => new PanelElement(msg.title, msg.content));
    })
  }
}
