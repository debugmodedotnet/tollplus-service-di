import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class LogupdatedService  {

  static count = 0; 
  constructor() { 
    LogupdatedService.count = LogupdatedService.count + 1; 
    console.log('log updated service object', LogupdatedService.count);
  }

  sayHello(name: string): string {

    // graphql code 
    return "Updated Hello " + name; 
  }
}
