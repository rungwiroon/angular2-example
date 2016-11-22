import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginModel, Login } from '../auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: Login = new LoginModel() ;
  public loading: boolean;
  public error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  login(): void {
    this.loading = true;
    this.authService.login(this.model.Username, this.model.Password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}
