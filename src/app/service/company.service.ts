import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Company} from "../model/Company";
import {CompanyUpdate} from "../model/CompanyUpdate";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly studentUrl: string;

  constructor(private readonly http: HttpClient) {
    this.studentUrl = 'http://localhost:8080/api/v1/companies'
  }

  public findById(id: number): Observable<Company> {
    return this.http.get<Company>(this.studentUrl + '/' + id)
      .pipe(
        catchError(this.handleError<Company>())
      )
  }

  public updateCompany(id: number, update: CompanyUpdate): Observable<Company>{
    return this.http.patch<Company>((this.studentUrl + '/' + id), update)
      .pipe(
        catchError(this.handleError<Company>())
      )
  }

  private handleError<T> (result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}
