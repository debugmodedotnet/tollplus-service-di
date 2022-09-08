import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { LogService } from '../log.service';
import { ApiConfig } from '../api-config';
import { apiconfigtoken } from '../api-config.token';

export const configvalue : ApiConfig = {
  EndPoint :"order.com",
  Token:"222"
}

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[{
    provide:apiconfigtoken,useValue:configvalue
  }]
})
export class OrdersModule { }
