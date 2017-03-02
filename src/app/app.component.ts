import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'my-app',
  templateUrl: `
  
`
  ,
})
export class AppComponent {
  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      city: 'Anytown',
      street: '123 main street',
      state: 'California',
      region: 'east',
    }
  };

  hideAddress = false;
}
