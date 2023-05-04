import {Injectable} from '@angular/core';
import {CrudService} from "./CrudService";
import {Msg} from "../model/Msg";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constraints} from "./Constraints";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MsgService extends CrudService<Msg> {

  constructor(http: HttpClient) {
    super(Constraints.MSG_URL, http);
  }

  findAllByRecipient(recipient: string): Observable<Msg[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('recipient', recipient);
    return this.http.get<Msg[]>(Constraints.MSG_URL, {params: queryParams})
      .pipe(
        catchError(this.handleError<Msg[]>())
      )
  }


}
