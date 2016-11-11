import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { HttpClient } from '../../http-client';

import { CustomerModel } from '.';

@Injectable()
export class CustomerService {
  private url: string = '/customer/';
  // private webApiUrl = 'http://localhost:55419/api/customer';
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  public get(): Promise<CustomerModel[]> {
    let customers = this.http.get(this.url)
                  .toPromise()
                  .then(response => response.json() as CustomerModel[])
                  .catch(this.handleError);
    return customers;
  }

  public getById(id: number): Promise<CustomerModel> {
    return this.http.get(this.url + id)
    .toPromise()
    .then(response => response.json() as CustomerModel)
    .catch(this.handleError);
  }

  public create(model: CustomerModel): void {
      this.http.post(this.url, model)
      .subscribe(
        (data) => {
          this.router.navigate(['customers']);
        },
        (response: Response) => {
          this.handleError(response);
        }
      );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
