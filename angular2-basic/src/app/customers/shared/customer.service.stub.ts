import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { CustomerModel, MockedCustomerModel } from '.';
import { asEnumerable } from 'linq-es2015';

export let CustomerServiceStub = {

    //constructor() { }

    get(): Promise<CustomerModel[]> {
        return Promise.resolve(MockedCustomerModel);
    },

    getById(id: number): Promise<CustomerModel> {
        let mockedModel = asEnumerable(MockedCustomerModel).Where(m => m.Id == id).FirstOrDefault();
        return Promise.resolve(mockedModel);
    },

    create(model: CustomerModel): void {
        let maxId = asEnumerable(MockedCustomerModel).Max(m => m.Id);
        model.Id = maxId + 1;
        MockedCustomerModel.push(model);
    },

    update(model: CustomerModel, id: number): void {
        asEnumerable(MockedCustomerModel).Select(m => { m = m.Id == id ? model : m; return m; }).ToArray();
    }
}
