import { Inject, Injectable } from '@angular/core';
import { ApiConfig } from './api-config';
import { apiconfigtoken } from './api-config.token';

console.log("I am part of final output bundle"); 

@Injectable({
  providedIn:'any'
})
export class LogService {

  static obectCount = 0; 
  constructor(@Inject(apiconfigtoken) private config: ApiConfig) {

    LogService.obectCount = LogService.obectCount + 1; 
    console.log('Logservice objects', LogService.obectCount);
   }

  sayHello(name : string): string {
    // REST API
    return "hello " + name; 
  }

  getEndPointInfo(){
    return this.config; 
  }

}


// singelton 
// tree-shakable 
// available eveywhere in application 


// create a service  - ng g s log 
// provide the service - provideIn : ''
// Inject a service : private s: service 
// use the service 