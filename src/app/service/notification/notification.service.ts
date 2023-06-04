import {Injectable} from '@angular/core';
import {Msg} from "../../model/msg";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {ApiConstraints} from "../../config/apiConstraints";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) {
  }

  findAllByRecipient(): Observable<Msg[]> {
    return this.http.get<Msg[]>(ApiConstraints.NOTIFICATION_URL)
      .pipe(
        catchError(this.handleError<Msg[]>())
      )
  }

  protected handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}
