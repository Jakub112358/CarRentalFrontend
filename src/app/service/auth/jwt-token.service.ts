import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  decodedToken: any;

  constructor() { }

  setToken(token: string | undefined){
    if(token){
      this.decodeToken(token);
    } else {
      this.setTokenUndefined();
    }
  }

  setTokenUndefined(){
    this.decodedToken = undefined;
  }

  private decodeToken(token: string){
      this.decodedToken = jwt_decode(token);
  }


  getEmail() {
    return this.decodedToken ? this.decodedToken.sub : null;
  }

  getExpireTime() {
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  getIssuedTime() {
    return this.decodedToken ? this.decodedToken.iat : null;
  }

  getRole(){
    return this.decodedToken ? this.decodedToken.rol : null;
  }


  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpireTime();
    if (expiryTime) {
      return ((1000 * (expiryTime as number)) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }

}
