import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {


  cartValue = 0;

  addToCart(){
    this.cartValue = this.cartValue + 1;
    return this.cartValue;
  }
  removeFromCart(){
    this.cartValue = this.cartValue - 1;
    return this.cartValue;
  }

  greeting(){
    alert("hiiii");
  }

  constructor() { }
}
