import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(value:string, isMale:boolean): string {
    if(isMale){
      return "Bonjour monsieur "+value;
    }else{
      return "Bonjour madame "+value;
    }
  }

}
