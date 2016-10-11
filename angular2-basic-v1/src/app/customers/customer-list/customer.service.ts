import { Injectable } from '@angular/core';

import { CUSTOMER } from '..';

@Injectable()
export class CustomerService {

  constructor() { }

  getCustomers() {
    return CUSTOMER;
  }

}
