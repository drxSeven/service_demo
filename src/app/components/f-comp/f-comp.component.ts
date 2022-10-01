import { Component, OnInit } from '@angular/core';
import { GreetingService } from 'src/app/services/greeting.service';

@Component({
  selector: 'app-f-comp',
  templateUrl: './f-comp.component.html',
  styleUrls: ['./f-comp.component.css']
})
export class FCompComponent implements OnInit {


  _greetingSER:GreetingService;
  constructor(_greetingSERREF:GreetingService) { 
    this._greetingSER = _greetingSERREF;
  }

  ngOnInit(): void {
  }

}
