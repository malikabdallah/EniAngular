import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  providers: [NumberService]
})
export class NumberComponent implements OnInit {

  numbers:number[];
  numbersAsynchrone:number[];

  constructor(private numberService:NumberService) {
    this.numbers=this.numberService.getFirstFiveNumber();
   }

  ngOnInit(): void {
  }

  promise(){
    this.numberService.getPromiseFirstFiveNumber()
      .then(nb=>{this.numbersAsynchrone=nb;}
      ).catch(error => console.error(error));

  }

}
