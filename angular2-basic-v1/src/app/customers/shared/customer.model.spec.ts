import { TestBed, async, inject } from '@angular/core/testing';
import {Customer} from './customer.model';

describe('Page', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
});