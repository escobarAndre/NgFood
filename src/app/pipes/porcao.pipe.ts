import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porcao'
})
export class PorcaoPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Porções')
}

}
