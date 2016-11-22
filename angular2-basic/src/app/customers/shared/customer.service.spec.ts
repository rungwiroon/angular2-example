/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CustomerService, CustomerServiceStub } from '.';

describe('Service: Customer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CustomerService, useValue: CustomerServiceStub }
      ]
    });
  });

  it('should ...', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
});
