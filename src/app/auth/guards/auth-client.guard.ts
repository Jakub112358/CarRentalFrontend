import {Injectable} from '@angular/core';
import {JwtTokenService} from "../jwt-token.service";
import {Role} from "../../model/enumeration/Role";

@Injectable({
  providedIn: 'root'
})
export class AuthClientGuard {
  constructor(private tokenService: JwtTokenService) {
  }

  canActivate() {
    return this.tokenService.getRole() === Role.Client;
  }

}
