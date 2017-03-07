import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';
import { Address } from './model';

@Injectable()
export class DataService {
    private customersUrl = 'api/customers';
    private addressesUrl = 'api/addresses';

    constructor(
        private loggerService: LoggerService,
        private http: Http,
    ) { }

    getCustomersP(): Promise<Customer[]> {

        this.loggerService.log(`Getting customers as a promise ...`);
        return this.http.get(this.customersUrl)
            .toPromise()
            .then(response => {
                const custs = response.json().data as Customer[];
                this.loggerService.log(`Got ${custs.length} customers`);
                return custs;
            },
            error => {
                this.loggerService.log(`Error occured ${error}`);
                return Promise.reject('Something bad happenned please check the console');
            }
            );
    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log(`Getting customers as an Observable via http...`)

        return this.http.get(this.customersUrl)
            .map(response => response.json().data as Customer[])
            .do((custs) => {
                this.loggerService.log(`Got ${custs.length} customers`)
            })
    }

    getAddresses(): Observable<Address[]> {
        this.loggerService.log(`Getting addresses as an Observable via http...`)

        return this.http.get(this.addressesUrl)
        .map(response => response.json().data as Address[])
        .do((addresses) => {
            this.loggerService.log(`Got ${addresses.length} addresses`)
        })
    }
}