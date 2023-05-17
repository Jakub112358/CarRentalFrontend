import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthRequest} from "../../model/rest/request/auth-request";
import {catchError, Observable, of} from "rxjs";
import {Constraints} from "../constraints";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  post(authRequest: AuthRequest): Observable<{token: string}> {
    return this.http.post<{token: string}>(Constraints.AUTH_URL + '/authenticate', authRequest)
      .pipe(
        catchError(this.handleError<{token: string}>())
      )
  }

  protected handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}
