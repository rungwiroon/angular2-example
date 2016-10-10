import { Injectable } from '@angular/core';

import { CUSTOMER } from './customer.mock';

@Injectable()
export class CustomerService {

  getCustomers() {
    return CUSTOMER;
  }

}
