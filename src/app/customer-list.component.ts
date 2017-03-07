import { Component, OnInit } from '@angular/core';

import { Customer } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: `customer-list.component.html`,
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  selectedCustomer: Customer;
  isBusy = false;

  constructor(private dataService: DataService, 
  private loggerService: LoggerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    this.isBusy = true;
    this.loggerService.log('Getting customers ...');
    // this.dataService.getCustomersP().then(custs => {
    this.dataService.getCustomers().subscribe(custs => {
      this.isBusy = false;
      this.customers = custs;
    }, (errorMsg: string) => {
      this.isBusy = false;
      alert(errorMsg);
    })

  }

  shiftCustomerList(increment: number) {
    let ix = this.customers.findIndex(c => c === this.selectedCustomer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.selectedCustomer = this.customers[ix];
  }
}
