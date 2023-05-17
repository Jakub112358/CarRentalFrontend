import {Component} from '@angular/core';
import {AuthRequest} from "../../model/rest/request/auth-request";
import {AuthService} from "../../service/auth/auth.service";
import {JwtTokenService} from "../../service/auth/jwt-token.service";
import {Role} from "../../model/enumeration/Role";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authRequest: AuthRequest;
  incorrectLogin: boolean;


  constructor(private authService: AuthService,
              private tokenService: JwtTokenService,
              private router: Router) {
  }

  ngOnInit() {
    this.incorrectLogin = false;
    this.authRequest = new AuthRequest('', '')
  }

  onSubmit() {
    this.authService.post(this.authRequest).subscribe(data => {
      if (data) {
        this.tokenService.setToken(data.token);


        let role: Role = this.tokenService.getRole()
        switch (role) {
          //TODO implement routing
          case Role.Employee: this.router.navigate(['/employee']); break;
          case Role.Admin: this.router.navigate(['/admin']); break;
          case Role.Client: this.router.navigate(['/client']); break;
        }
      } else {
        this.tokenService.setToken(undefined);
        this.incorrectLogin = true;
      }
    })
  }
}
