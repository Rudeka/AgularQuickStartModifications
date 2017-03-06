import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: `customer-detail.component.html`
})
export class CustomerDetailComponent {
  @Input() customer: Customer;
  @Output() shiftCustomerDetail = new EventEmitter<number>();

  right() {
    this.shiftCustomerDetail.emit(1);
  }

  left() {
    this.shiftCustomerDetail.emit(-1);
  }
}
