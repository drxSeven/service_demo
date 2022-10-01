import { Component, OnInit } from '@angular/core';
import { GreetingService } from 'src/app/services/greeting.service';

@Component({
  selector: 'app-k-comp',
  templateUrl: './k-comp.component.html',
  styleUrls: ['./k-comp.component.css']
})
export class KCompComponent implements OnInit {


  _greetingSER:GreetingService;
  
  constructor(_greetingSERREF:GreetingService) {
    this._greetingSER = _greetingSERREF;
   }

  ngOnInit(): void {
  }

}
