import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerModel, CustomerService } from '../shared';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {

  public customerList: CustomerModel[];
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  private getCustomers(): void{
    this.customerService.get()
      .then(customers => {
        this.customerList = customers;
    });
  }

  public onUpdate(id: number): void {
    this.router.navigate(['customer/update', id]);
  }

}
