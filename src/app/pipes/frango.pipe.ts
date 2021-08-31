import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frango'
})
export class FrangoPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Sanduiches de Frango')
}
}
