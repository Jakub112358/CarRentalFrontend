import {Injectable} from '@angular/core';
import {CrudService} from "./crud-service";
import {Msg} from "../model/msg";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {ApiConstraints} from "../config/apiConstraints";

@Injectable({
  providedIn: 'root'
})
export class MsgService extends CrudService<Msg> {

  constructor(http: HttpClient) {
    super(ApiConstraints.MSG_URL, http);
  }

  findAllByRecipient(recipient: string): Observable<Msg[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('recipient', recipient);
    return this.http.get<Msg[]>(ApiConstraints.MSG_URL, {params: queryParams})
      .pipe(
        catchError(this.handleError<Msg[]>())
      )
  }


}
