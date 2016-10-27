import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CustomerModel, MockedCustomerModel } from '.';

@Injectable()
export class CustomerService {

  private webApiUrl = "http://localhost:55419/api";

  constructor(private http : Http) { }

  public get(): Promise<CustomerModel[]>{
    let customers = this.http.get(this.webApiUrl + "/customer")
                  .toPromise()
                  .then(response => response.json() as CustomerModel[])
                  .catch(this.handleError)
    return customers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
