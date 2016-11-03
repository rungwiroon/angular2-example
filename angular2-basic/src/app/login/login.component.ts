import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, Login } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: Login = { Username: '', Password: '' };
  public loading: boolean = false;
  public error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router) {

    }

  ngOnInit() {
    this.authService.logout();
  }

  login(): void {
    this.loading = true;

    this.authService.login(this.model.Username, this.model.Password)
    .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
    });
  }

}
