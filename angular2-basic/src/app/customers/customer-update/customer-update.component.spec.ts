/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CustomerUpdateComponent } from './customer-update.component';
import { CustomerService, FakeCustomerService } from '..';
import { ActivatedRoute } from '@angular/router';

describe('Component: CustomerUpdate', () => {

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CustomerService, useClass: FakeCustomerService },
        { provide: ActivatedRoute, useClass: RouterStub }
      ]
    });
  });
  it('should create an instance', inject([CustomerService, ActivatedRoute], (service: CustomerService, route: ActivatedRoute) => {
    let component = new CustomerUpdateComponent(service, route);
    expect(component).toBeTruthy();
  }));
});
