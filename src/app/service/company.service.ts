import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Company} from "../model/Company";
import {CompanyUpdateDto} from "../model/CompanyUpdateDto";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly companyUrl: string;

  constructor(private readonly http: HttpClient) {
    this.companyUrl = 'http://localhost:8080/api/v1/companies';
  }

  public findById(id: number): Observable<Company> {
    return this.http.get<Company>(this.companyUrl + '/' + id)
      .pipe(
        catchError(this.handleError<Company>())
      )
  }

  public updateCompany(id: number, update: CompanyUpdateDto): Observable<Company>{
    return this.http.patch<Company>((this.companyUrl + '/' + id), update)
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
