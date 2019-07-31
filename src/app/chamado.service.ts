import { Injectable } from '@angular/core';
import {Chamado} from './model/chamado'
import { Fila } from './model/fila';
@Injectable({
  providedIn: 'root'
})
export class ChamadoService {
 

  chamados: Chamado[] = [
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
  getChamados (): Chamado[]{
    return this.chamados;
  }

  getChamadosPorFila (fila: Fila): Chamado []{
    return this.chamados.filter (chamado => chamado.idFila == fila.id);
  }

  getChamadosPorId (idFila: number): Chamado []{
    return this.chamados.filter (chamado => chamado.idFila == idFila);
  }

  adicionaChamado (chamado: Chamado): void{
    this.chamados.push(chamado);
  }

  nextId (): number{
    return this.chamados.length <= 0 ? 1 : 
    Math.max (...this.chamados.map(chamado => chamado.id)) + 1;
  }

  getChamadoPeloId (id: number): Chamado{
    return this.chamados.find(chamado => chamado.id == id);
  }

  finalizaChamado (id: number, descricaoFinalizacao: string): void{
    this.chamados.forEach(chamado => {
      if (chamado.id == id){
        chamado.status = 'fechado';
        chamado.dataFechamento = Date.now().toString(),
        chamado.descricaoFinalizacao = descricaoFinalizacao
      }
    });
  }
  constructor() { }
}
