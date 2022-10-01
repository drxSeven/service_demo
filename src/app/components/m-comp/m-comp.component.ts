import { Component, OnInit } from '@angular/core';
import { GreetingService } from 'src/app/services/greeting.service';

@Component({
  selector: 'app-m-comp',
  templateUrl: './m-comp.component.html',
  styleUrls: ['./m-comp.component.css']
})
export class MCompComponent implements OnInit {

  _greetingSER:GreetingService;
  constructor(_greetingSERREF:GreetingService) { 
    this._greetingSER = _greetingSERREF;
  }

  ngOnInit(): void {
  }

}
