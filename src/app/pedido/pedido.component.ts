import { Component, OnInit, Output } from '@angular/core';
import { produtosService } from '../produtosAdd.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.sass']
})
export class PedidoComponent {

  produtosService: produtosService

  constructor(produtosService: produtosService, private router: Router) {
    this.produtosService = produtosService,
    this.user = true
   }

   @Output() user = true

  goToPedido(page:string) {
    this.router.navigate([page])
  }
}
