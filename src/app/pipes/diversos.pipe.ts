import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diversos'
})
export class DiversosPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Sanduiches Diversos')
}

}
