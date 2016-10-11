import { Component, OnInit } from '@angular/core';

import { CustomerModel, CustomerService } from '../shared';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    
  }

  getCustomers(){
    return this.customerService.getCustomers();
  }

}
