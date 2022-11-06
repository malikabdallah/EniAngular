import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

   getFirstFiveNumber():number[]{
    return [1,2,3,4,5];
   }

   getPromiseFirstFiveNumber():Promise<any>{
    const x=Math.floor(Math.random() * 2) + 1;
    alert("x ="+x);
    if(x === 2){
      return Promise.reject("nous avons rencontre des projbleme cote serveur");
    }else{
      return Promise.resolve(this.getFirstFiveNumber());
    }
   }


  
  constructor() { }
}
