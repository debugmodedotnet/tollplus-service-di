import { Component, OnInit } from '@angular/core';
import { ApiConfig } from '../api-config';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  message = "";
  apiconfig? : ApiConfig; 
  constructor(private logservice : LogService) { }

  ngOnInit(): void {
    this.message = this.logservice.sayHello('customers');
    this.apiconfig = this.logservice.getEndPointInfo();
  }

}
