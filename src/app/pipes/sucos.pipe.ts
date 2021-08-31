import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sucos'
})
export class SucosPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Sucos')
}

}
