import { Injectable } from '@angular/core';

import { MockedCustomerModel } from '.';

@Injectable()
export class CustomerService {

  constructor() { }

  getCustomers(){
    return MockedCustomerModel;
  }

}
