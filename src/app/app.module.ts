import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FilasComponent } from './filas/filas.component';
import { AdicionaFilaComponent } from './adiciona-fila/adiciona-fila.component';
import { AppRoutingModule } from './app-routing.module';
import { ChamadosComponent } from './chamados/chamados.component';
import { AdicionaChamadoComponent } from './adiciona-chamado/adiciona-chamado.component';

import {ReactiveFormsModule} from '@angular/forms';
import { DetalhesChamadoComponent } from './detalhes-chamado/detalhes-chamado.component'

import {HttpClientModule} from '@angular/common/http';


import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service'

@NgModule({
  declarations: [
    AppComponent,
    FilasComponent,
    AdicionaFilaComponent,
    ChamadosComponent,
    AdicionaChamadoComponent,
    DetalhesChamadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
