import { Component, Input } from '@angular/core';
import { Address } from './model';

@Component({
    moduleId: module.id,
    selector: 'address-comp',
    templateUrl: 'address.component.html'
})
export class AddressComponent {

    addresses: Address[] = [
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

    // regions = ['East', 'South', 'North', 'West', 'Midwest'];
    // states = ['California', 'Quebec', 'Jalisco', 'Illinois'];

    @Input() address: Address;

    showAddress = true;
}