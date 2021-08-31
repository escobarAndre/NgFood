import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pizzas'
})
export class PizzasPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter( arr => arr.categoria == 'Pizzas')
}

}
