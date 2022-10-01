import { Component } from '@angular/core';
import { GreetingService } from './services/greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _greetingSER:GreetingService;

  constructor(_greetingSERREF:GreetingService){
    this._greetingSER = _greetingSERREF;
  }

}
