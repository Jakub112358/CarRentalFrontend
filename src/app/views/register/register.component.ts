import {Component} from '@angular/core';
import {ClientRequest} from "../../model/rest/request/client-request";
import {ClientService} from "../../service/client/client.service";
import {AuthService} from "../../auth/auth.service";
import {AuthRequest} from "../../model/rest/request/auth-request";
import {JwtTokenService} from "../../auth/jwt-token.service";
import {Router} from "@angular/router";
import {Address} from "../../model/address";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  client: ClientRequest;
  incorrectRegister: boolean;


  constructor(private clientService: ClientService,
              private authService: AuthService,
              private tokenService: JwtTokenService,
              private router: Router) {
    this.client = new ClientRequest('','','','',new Address());
  }

  ngOnInit() {
    this.incorrectRegister = false;

  }

  onSubmit() {
    this.clientService.save(this.client).subscribe(data => {
      if (data) {
        let authRequest: AuthRequest = new AuthRequest(this.client.email, this.client.password);
        this.authService.post(authRequest).subscribe(data => {
          this.tokenService.setToken(data.token);
          this.router.navigate(['/client']);
        })
      } else {
        this.incorrectRegister = true;
      }
    })
  }
}
