import {Injectable} from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {Office} from "../model/Office";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  private readonly officeUrl: string

  constructor(private readonly http: HttpClient) {
    this.officeUrl = 'http://localhost:8080/api/v1/offices';

  }

  findAll(): Observable<Office[]> {
    return this.http.get<Office[]>(this.officeUrl)
      .pipe(
        catchError(this.handleError<Office[]>())
      )
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}
