import { Injectable } from "@angular/core";
import { ObjectUnsubscribedError } from "rxjs";
import { ProdutosAdc } from "./produtosAdc.interface";

@Injectable ({
    providedIn: 'root'
})


export class produtosService {

    produtos: ProdutosAdc[] = []
    precoAdd: number[] = []
    valorFinal: number = 0
     
    add(newItem: string, newPrice: number) {
        const index = this.produtos.findIndex(item => item.nome === newItem)
        if(index > -1){
            this.produtos[index].quantidade = this.produtos[index].quantidade +1
        } else {
            this.produtos.push({
                nome: newItem,
                preco: newPrice,
                quantidade: 1
               
        })
    }
        return this.produtos
    }

    valorTotal() {
            return this.produtos.reduce((acumulado,linha) => acumulado + linha.quantidade * linha.preco, 0) 
    }

    quantidadeTotal() {
        return this.produtos.reduce((acumulado,linha) => acumulado +  linha.quantidade, 0)
    }

    limpar() {
        this.produtos = []
    }
}