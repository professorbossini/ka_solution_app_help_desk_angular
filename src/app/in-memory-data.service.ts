import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Fila } from './model/fila';
import { Chamado } from './model/chamado';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb (){
    const filas: Fila[] = [
      {id: 1, nome: 'Telefonia'},
      {id: 2, nome: 'Redes'},
      {id: 3, nome: 'Computadores'}
    ];
    const chamados: Chamado[] = [
      {
        id: 1000, 
        descricao: 'Telefone não funciona', 
        status: 'aberto', 
        dataAbertura: '2019-05-03', 
        dataFechamento: null, 
        descricaoFinalizacao: null,
        idFila: 1
      },
      {
        id: 1001, 
        descricao: 'Telefone quebrado', 
        status: 'fechado', 
        dataAbertura: '2019-06-15', 
        dataFechamento: '2019-06-16', 
        descricaoFinalizacao: 'Telefone substituído',
        idFila: 1
      },
      {
        id: 1002, 
        descricao: 'Laboratório sem cabeamento', 
        status: 'fechado', 
        dataAbertura: '2019-07-15', 
        dataFechamento: '2019-07-16', 
        descricaoFinalizacao: 'Telefone substituído',
        idFila: 2
      },
    ];
    return {
      filas: filas,
      chamados: chamados
    };
  }

  

  constructor() { }
}
