import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  public count:number=0;

  increment(i:number){
    this.count++;
  }

  constructor() { }
}
