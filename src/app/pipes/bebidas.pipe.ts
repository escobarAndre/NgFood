import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bebidas'
})
export class BebidasPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Bebidas Diversas')
}

}
