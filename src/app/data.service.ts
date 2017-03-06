import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }

    getCustomersP(): Promise<Customer[]> {
        this.loggerService.log(`Getting customers as a promise ...`)
        const testCustomers = createTestCustomers();
        return new Promise<Customer[]>(resolve => {
            setTimeout(() => {
                this.loggerService.log(`Got ${testCustomers.length} customers`);
                resolve(testCustomers);
            }, 1500);
        })
    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log(`Getting customers as an Observable ...`)
        const testCustomers = createTestCustomers();
        return of(testCustomers)
            .delay(1500)
            .do(() => {
                this.loggerService.log(`Got ${testCustomers.length} customers`)
            })

    }
}