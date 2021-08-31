import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { produtosService } from '../produtosAdd.service';
import { Router } from '@angular/router';

const urlBase = 'http://localhost:3000'

interface Produto {
  categoria: string
  descricao: string
  preco: number
}

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.sass']
})
export class CardapioComponent implements OnInit {

  produtos: Produto[] = [];
  produtosService: produtosService

  constructor (private httpClient: HttpClient, produtosService: produtosService, private router: Router) {
    this.produtosService = produtosService,
    this.user = true
  }

  @Output() user = true

  ngOnInit(): void {
    this.httpClient.get<Produto[]>(`${urlBase}/cardapio`)
    .subscribe(dados => {
      this.produtos = dados;
 });
  }

  goToPedido(page:string) {
    this.router.navigate([page])
  }

}
