import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { produtosService } from './produtosAdd.service'

const urlBase = 'http://localhost:3000'

interface Produto {
  categoria: string
  descricao: string
  preco: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  produtos: Produto[] = [];
  produtosService: produtosService

  constructor (private httpClient: HttpClient, produtosService: produtosService,) {
    this.produtosService = produtosService
  }

  ngOnInit(): void {
    this.httpClient.get<Produto[]>(`${urlBase}/cardapio`)
    .subscribe(dados => {
      this.produtos = dados;
 });
  }
  
  title = 'ngFood';
}
