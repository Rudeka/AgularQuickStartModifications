import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCustomers } from './test-data';

import { Address } from './model';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const addresses: Address[] = [
            {
                street: '123 Main Street',
                city: 'Anytown',
                state: 'California',
                region: 'West'
            },
            {
                street: '456 Rue de Main',
                city: 'Quebec City',
                state: 'Quebec',
                region: 'East'
            },
            {
                street: '789 Calle Principal',
                city: 'Guadalajara',
                state: 'Jalisco',
                region: 'South'
            },
            {
                street: '137 DeKoven Street',
                city: 'Chicago',
                state: 'Illinois',
                region: 'Midwest'
            },
        ];
        return { customers: createTestCustomers(), addresses };
    }
}