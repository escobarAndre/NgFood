import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PedidoComponent } from './pedido/pedido.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FrangoPipe } from './pipes/frango.pipe';
import { DiversosPipe } from './pipes/diversos.pipe';
import { EspeciaisPipe } from './pipes/especiais.pipe';
import { PizzasPipe } from './pipes/pizzas.pipe';
import { MacarraoPipe } from './pipes/macarrao.pipe';
import { PastelaoPipe } from './pipes/pastelao.pipe';
import { PorcaoPipe } from './pipes/porcao.pipe';
import { AcaiPipe } from './pipes/acai.pipe';
import { SucosPipe } from './pipes/sucos.pipe';
import { BebidasPipe } from './pipes/bebidas.pipe';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CategoriaPipe } from './pipes/categoria.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    FilterPipe,
    FrangoPipe,
    DiversosPipe,
    EspeciaisPipe,
    PizzasPipe,
    MacarraoPipe,
    PastelaoPipe,
    PorcaoPipe,
    AcaiPipe,
    SucosPipe,
    BebidasPipe,
    CardapioComponent,
    CategoriaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
