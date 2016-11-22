/* tslint:disable:no-unused-variable */

import { TestBed,  inject, ComponentFixture} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CustomerCreateComponent } from './customer-create.component';
import { CustomerService, CustomerServiceStub } from '..';

let el: HTMLElement;
let fixture: any;
let comp: CustomerCreateComponent;
let de: DebugElement;

describe('Component: CustomerCreate', () => {

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CustomerCreateComponent],
      providers: [
        { provide: CustomerService, useValue: CustomerServiceStub }
      ]
    }).createComponent(CustomerCreateComponent);

    // get test component from the fixture
    //comp = fixture.componentInstance;

    // query for the title <h1> by CSS element selector
    //de = fixture.debugElement.query(By.css('h2'));

    //el = de.nativeElement;
  });

  /*it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

  it('should create an instance', inject([CustomerService], (service: CustomerService) => {
    let component = new CustomerCreateComponent(service);
    expect(component).toBeTruthy();
  }));*/
});
