import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {JwtTokenService} from "./jwt-token.service";
import {Observable} from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: JwtTokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    if(token){
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(req);
  }
}
