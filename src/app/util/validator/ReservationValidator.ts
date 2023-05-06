import {Injectable} from "@angular/core";
import {CreateFormElement} from "../../model/templateElements/CreateFormElement";

@Injectable({
  providedIn: 'root'
})
export class ReservationValidator {



  validateDateAndOfficeForm(elements: CreateFormElement[]) {
    //TODO this [0] doesn't look good, refactor this!
    let dateFrom = elements.filter(e=> e.name==='dateFrom').map(e => e.model)[0];

    elements.forEach(e=>{
      switch (e.name){
        case 'dateFrom': this.validateDateFrom(e); break;
        case 'dateTo': this.validateDateTo(e, dateFrom); break;

      }
    })
  }

  private validateDateFrom(element: CreateFormElement) {
    element.valid = (element.model == '' ? false : this.checkDateIsAfter (element.model, new Date()));
  }

  private validateDateTo(element: CreateFormElement, dateFrom: Date) {
    element.valid = (element.model == '' ? false : this.checkDateIsAfter (element.model, dateFrom));
  }

  private checkDateIsAfter(model: Date, date: Date) {
    return model.getDate() >= date.getDate();
  }
}
