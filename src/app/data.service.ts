import { Injectable } from '@angular/core';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }

    getCustomers() {
        this.loggerService.log(`Getting customers as a promise ...`)
        const testCustomers = createTestCustomers();
        return new Promise<Customer[]>(resolve => {
            setTimeout(() => {
                this.loggerService.log(`Got ${testCustomers.length} customers`);
                resolve(testCustomers);
            }, 1500);
        })

    }
}