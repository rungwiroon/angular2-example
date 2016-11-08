import { Component, OnInit } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-2-data-table';

import { Employee, EmployeeModel, MockedEmployee } from '../shared';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeResource = new DataTableResource(MockedEmployee);
  public employeeList: Employee[] = [];
  public employeeCount: number = 0;

  constructor() {
    this.employeeResource.count().then(count => this.employeeCount = count);
   }

  ngOnInit() {

  }

  reloadEmployee(params) {
    this.employeeResource.query(params).then(items => this.employeeList = items);
  }

}
