import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { CustomerModel, MockedCustomerModel } from '.';

@Injectable()
export class CustomerService {

  private webApiUrl = "http://localhost:55419/api";
  private headers = new Headers({'content-type': 'application/json'});

  constructor(private http : Http, private router: Router) { }

  public get(): Promise<CustomerModel[]>{
    let customers = this.http.get(this.webApiUrl + "/customer")
                  .toPromise()
                  .then(response => response.json() as CustomerModel[])
                  .catch(this.handleError);
    return customers;
  }

  public getById(id: number): Promise<CustomerModel>{
    return this.http.get(this.webApiUrl + "/customer" + '/' + id)
    .toPromise()
    .then(Response => Response.json() as CustomerModel)
    .catch(this.handleError);
  } 

  public create(model: CustomerModel): void{
    this.http.post(this.webApiUrl + "/customer", JSON.stringify(model), {headers: this.headers})
                  .subscribe(
                    (data) => {
                      this.router.navigate(['customers']);
                    },
                    (response: Response) => {
                      this.handleError(response);
                    }
                  );
  }

  public update(model: CustomerModel, id: number): void{
    this.http.put(this.webApiUrl + "/customer" + '/' + id, JSON.stringify(model), {headers: this.headers})
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
