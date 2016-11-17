/* tslint:disable:no-unused-variable */

import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CustomerListComponent } from './customer-list.component';
import { CustomerService, FakeCustomerService } from '..';
import { Router } from '@angular/router';

let el: HTMLElement;
let fixture: ComponentFixture<CustomerListComponent>;
let comp: CustomerListComponent;
let de: DebugElement;
let component: CustomerListComponent;



describe('Component: CustomerList', () => {

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //declarations: [CustomerListComponent],
      providers: [
        { provide: CustomerService, useClass: FakeCustomerService },
        { provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents().then(() => {
        /*console.log(123456789)
        fixture = TestBed.createComponent(CustomerListComponent);

        comp = fixture.componentInstance;

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h2'));

        el = de.nativeElement;*/
      });
  }));

  /*it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });*/

  it('should create an instance', inject([CustomerService, Router], (service: CustomerService, router: Router) => {
    let component = new CustomerListComponent(service, router);
    expect(component).toBeTruthy();
  }));
})
