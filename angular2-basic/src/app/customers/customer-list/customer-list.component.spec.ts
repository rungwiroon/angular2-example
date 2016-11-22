/* tslint:disable:no-unused-variable */

import { TestBed, inject, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';

import { CustomerListComponent } from './customer-list.component';
import { CustomerService, CustomerServiceStub, CustomerModel } from '..';

let el: HTMLElement;
let fixture: ComponentFixture<CustomerListComponent>;
let comp: CustomerListComponent;
let de: DebugElement;
let customers: CustomerModel[] = [
 { Id: 1, Name: 'test', Address: 'Addr', Province: '1' } 
];
let spy: any;

describe('Component: CustomerList', () => {

  let routerStub = {
    navigateByUrl(url: string) { return url; }
  };

  let customerServiceStub = {
    get() {
      return Promise.resolve(customers);
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      providers: [
        { provide: CustomerService, useValue: customerServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    })
    // Override component's own provider
    .overrideComponent(CustomerListComponent, {
      set: {
        providers: [
          { provide: CustomerService, useValue: customerServiceStub }
        ]
      }
    })
    ;

    fixture = TestBed.createComponent(CustomerListComponent);

    comp = fixture.componentInstance;

    let customerService = fixture.debugElement.injector.get(CustomerService);

    spy = spyOn(customerService, 'get')
      .and.returnValue(Promise.resolve(customers));

  });

  it('should create an instance', inject([CustomerService, Router], (service: CustomerService, router: Router) => {
    let component = new CustomerListComponent(service, router);
    expect(component).toBeTruthy();
  }));

  it('should not show cutomer list before OnInit', () => {
    expect(comp.customerList).toBeFalsy('kuy kuy kuy');

    let elem = fixture.debugElement.query(By.css('.row'));
    expect(elem).toBeFalsy('nothing displayed');
    expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
  });

  it('should still not show quote after component initialized', () => {
    fixture.detectChanges();
    // getQuote service is async => still has not returned with quote
    let elem = fixture.debugElement.query(By.css('.row'));
    expect(elem).toBeFalsy('nothing displayed');
    expect(spy.calls.any()).toBe(true, 'getQuote called');
  });

  it('should show quote after getQuote promise (async)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async get cutomers
      fixture.detectChanges();        // update view with quote
      expect(comp.customerList.length).toBe(1, 'kuy kuy kuy');
      let elem = fixture.debugElement.query(By.css('.row'));
      expect(elem).toBeTruthy('It displayed');
      
    });
  }));

  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(comp.customerList.length).toBe(1, 'kuy kuy kuy');
    let elem = fixture.debugElement.query(By.css('.row'));
      expect(elem).toBeTruthy('It displayed');
  }));
});
