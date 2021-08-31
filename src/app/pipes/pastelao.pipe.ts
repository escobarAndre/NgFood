import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastelao'
})
export class PastelaoPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Pastelão')
}

}
