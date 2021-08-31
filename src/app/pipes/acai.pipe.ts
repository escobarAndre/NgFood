import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acai'
})
export class AcaiPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Creme de Açai')
}

}
