import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {

  transform(items: any[]): any {
      return items.filter( arr => arr.categoria == 'Sanduiches de Boi')
    
    
      
    
    
}
}
