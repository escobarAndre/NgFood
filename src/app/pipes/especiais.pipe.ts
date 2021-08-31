import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'especiais'
})
export class EspeciaisPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Sanduiches Especiais')
}

}
