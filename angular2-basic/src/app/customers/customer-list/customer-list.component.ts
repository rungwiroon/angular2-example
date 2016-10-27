import { Component, OnInit } from '@angular/core';

import { CustomerModel, CustomerService } from '../shared';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customerList: CustomerModel[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  private getCustomers(): void{
    this.customerService.get()
      .then(customers => {
        this.customerList = customers;
    });
  }

}
