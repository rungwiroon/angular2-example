import { Component, OnInit } from '@angular/core';

import { Customer } from '..';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

customers: Customer[];
//private customerService: CustomerService;

  constructor(private customerService: CustomerService) {
    //this.customerService = new CustomerService();
    console.log('Injectable');
   }

  ngOnInit() {
        this.getCustomers();
  }

  getCustomers() {
    this.customers = this.customerService.getCustomers();
  }

}
