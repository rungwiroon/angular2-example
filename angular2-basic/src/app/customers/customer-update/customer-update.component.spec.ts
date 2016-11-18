/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CustomerUpdateComponent } from './customer-update.component';
import { CustomerService, CustomerServiceStub } from '..';
import { ActivatedRoute } from '@angular/router';

describe('Component: CustomerUpdate', () => {

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CustomerService, useValue: CustomerServiceStub },
        { provide: ActivatedRoute, useValue: RouterStub }
      ]
    });
  });
  it('should create an instance', inject([CustomerService, ActivatedRoute], (service: CustomerService, route: ActivatedRoute) => {
    let component = new CustomerUpdateComponent(service, route);
    expect(component).toBeTruthy();
  }));
});
