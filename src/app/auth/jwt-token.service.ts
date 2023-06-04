import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  decodedToken: any;
  token: any;

  constructor() { }

  setToken(token: string | undefined){
    if(token){
      this.token = token;
      this.decodeToken(token);
    } else {
      this.setTokenUndefined();
    }
  }
  getToken(){
    return this.token;
  }

  setTokenUndefined(){
    this.decodedToken = undefined;
    this.token = undefined;
  }

  private decodeToken(token: string){
      this.decodedToken = jwt_decode(token);
  }

  getUserId() {
    return this.decodedToken ? this.decodedToken.id : null;
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
