import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {MensagemModule} from "./componentes/mensagem/mensagem.module";
import {RodapeComponent} from "./componentes/rodape/rodape.component";
import {CabecalhoComponent} from "./componentes/cabecalho/cabecalho.component";
import {RodapeModule} from "./componentes/rodape/rodape.module";
import {CabecalhoModule} from "./componentes/cabecalho/cabecalho.module";
import {AutenticacaoModule} from "./autenticacao/autenticacao.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MensagemModule,
    RodapeModule,
    CabecalhoModule,
    AutenticacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
