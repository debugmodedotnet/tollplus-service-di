import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiConfig } from '../api-config';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers:[],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class Child1Component implements OnInit {

  message  = "";
  apiconfig ? : ApiConfig;
  constructor(private logService : LogService) { }

  ngOnInit(): void {
   this.message = this.logService.sayHello("Child 1"); 
   this.apiconfig = this.logService.getEndPointInfo();
  }

}
