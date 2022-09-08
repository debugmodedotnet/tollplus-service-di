import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { LogupdatedService } from './logupdated.service';
import { Child3Component } from './child3/child3.component';
import { GlobalErrorService } from './global-error.service';
import { ApiConfig } from './api-config';
import { apiconfigtoken } from './api-config.token';

const flag = false; // api 
const getFlag = () =>{
  // if(flag) {
  //   return new LogService
  // }
  // else {
  //   return new LogupdatedService;
  // }
}

export const configvalue : ApiConfig = {
  EndPoint :"home.com",
  Token:"999999"
}

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [
  //   {provide:LogService,useFactory:getFlag},
  // {provide:LogupdatedService,useExisting:LogService},
  // {provide:ErrorHandler,useClass:GlobalErrorService}
  providers: [
  {provide:apiconfigtoken,useValue:configvalue}
  // {provide:ErrorHandler,useClass:GlobalErrorService}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
