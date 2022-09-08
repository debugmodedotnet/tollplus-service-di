import { Component, OnInit } from '@angular/core';
import { LogupdatedService } from '../logupdated.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  message = "";
  constructor(private updatedlogservice : LogupdatedService) { }

  ngOnInit(): void {

    this.message = this.updatedlogservice.sayHello('Child 3');
  }

}
