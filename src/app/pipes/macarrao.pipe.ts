import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'macarrao'
})
export class MacarraoPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Macarrão na Chapa')
}

}
