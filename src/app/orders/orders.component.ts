import { Component, OnInit } from '@angular/core';
import { ApiConfig } from '../api-config';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  message  = "";
  apiconfig? : ApiConfig; 
  constructor(private logservice : LogService) { }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("Orders");
    this.apiconfig = this.logservice.getEndPointInfo();
  }

}
