import {catchError, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CreateDto} from "../model/interfaces/CreateDto";
import {UpdateDto} from "../model/interfaces/UpdateDto";

export abstract class CrudService<T> {
  protected constructor(
    protected url: string,
    protected http: HttpClient
  ) {
  }

  save(createDto: CreateDto): Observable<T> {
    return this.http.post<T>(this.url, createDto)
      .pipe(
        catchError(this.handleError<T>())
      )
  }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url)
      .pipe(
        catchError(this.handleError<T[]>())
      )
  }

  public findById(id: number): Observable<T> {
    return this.http.get<T>(this.url + '/' + id)
      .pipe(
        catchError(this.handleError<T>())
      )
  }

  public update(id: number, update: UpdateDto): Observable<T> {
    return this.http.patch<T>((this.url + '/' + id), update)
      .pipe(
        catchError(this.handleError<T>())
      )
  }

  protected handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }

}
