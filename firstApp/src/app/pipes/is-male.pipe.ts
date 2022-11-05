import { Pipe, PipeTransform } from '@angular/core';
import { Personne } from './pipes.component';

@Pipe({
  name: 'isMale'
})
export class IsMalePipe implements PipeTransform {

  transform(personnes: Personne[]): Personne[] {
    alert((personnes.filter(x=>x.isMale)).length);
    return personnes.filter(x=>x.isMale);
  }

}
