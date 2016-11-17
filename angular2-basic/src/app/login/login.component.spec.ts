/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { AuthService, LoginModel, Login } from '../auth'

describe('Component: Login', () => {

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useClass: AuthService },
        { provide: Router, useClass: RouterStub }
      ]
    });
  });

  /*it('should create an instance', inject([AuthService, Router], (service: AuthService, router: Router) => {
    let component = new LoginComponent(service, router);
    expect(component).toBeTruthy();
  }));*/
});
