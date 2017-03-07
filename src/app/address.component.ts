import { Component, Input, OnInit } from '@angular/core';
import { Address } from './model';

import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
    moduleId: module.id,
    selector: 'address-comp',
    templateUrl: 'address.component.html'
})
export class AddressComponent implements OnInit {

    constructor(
        private dataService: DataService,
        private loggerService: LoggerService
    ) { }

    addresses: Address[] = [];

    @Input() address: Address;

    ngOnInit() {
        this.getAddresses();
    }

    getAddresses(){
        this.loggerService.log(`Getting addresses...`);
        this.dataService.getAddresses().subscribe(receivedAddresses => {
            this.addresses = receivedAddresses;
        })
    }


    showAddress = true;    
}