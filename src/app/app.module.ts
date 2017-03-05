import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
