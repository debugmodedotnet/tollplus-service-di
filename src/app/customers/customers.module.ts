import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { LogService } from '../log.service';
import { ApiConfig } from '../api-config';
import { apiconfigtoken } from '../api-config.token';

export const configvalue : ApiConfig = {
  EndPoint :"customer.com",
  Token:"1111"
}
@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[{
    provide:apiconfigtoken,useValue:configvalue
  }]
})
export class CustomersModule { }
