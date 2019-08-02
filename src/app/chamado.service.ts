import { Injectable } from '@angular/core';
import {Chamado} from './model/chamado'
import { Fila } from './model/fila';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ChamadoService { 

  //variável definida no corpo da classe
  httpOptions = {
    headers: new HttpHeaders ({'Content-Type': 'application/json'})
  }

  private chamadosURL = 'api/chamados';

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
  getChamados (): Observable<Chamado[]>{
    //return of(this.chamados);
    return this.httpClient.get<Chamado[]>(this.chamadosURL);
  }

  getChamadoPeloId (id: number): Observable<Chamado>{
    //return of(this.chamados.find(chamado => chamado.id == id));
    return this.httpClient.get<Chamado>(`${this.chamadosURL}/${id}`)
  }

  getChamadosPorId (idFila: number): Observable <Chamado []>{
    //return of(this.chamados.filter (chamado => chamado.idFila == idFila));
    return this.httpClient.get<Chamado[]>(`${this.chamadosURL}/?idFila=${idFila}`)
  }

  getChamadosPorFila (fila: Fila): Observable<Chamado []>{
    //return of(this.chamados.filter (chamado => chamado.idFila == fila.id));
    return this.getChamadosPorId(fila.id);
  }  

  adicionaChamado (chamado: Chamado): Observable <Chamado>{
    //this.chamados.push(chamado);
    return this.httpClient.post <Chamado> (this.chamadosURL, chamado, this.httpOptions);
  }

  nextId (): number{
    return this.chamados.length <= 0 ? 1 : 
    Math.max (...this.chamados.map(chamado => chamado.id)) + 1;
  }

  

  /*finalizaChamado (id: number, descricaoFinalizacao: string): void{
    /*this.chamados.forEach(chamado => {
      if (chamado.id == id){
        chamado.status = 'fechado';
        chamado.dataFechamento = Date.now().toString(),
        chamado.descricaoFinalizacao = descricaoFinalizacao
      }
    });
  }
  */
 finalizaChamado (chamado: Chamado, descricaoFinalizacao: string): Observable<Chamado>{
  chamado.status = 'fechado';
  chamado.dataFechamento = Date.now().toString(),
  chamado.descricaoFinalizacao = descricaoFinalizacao;
  return this.httpClient.put <Chamado> (this.chamadosURL, chamado, this.httpOptions);
 }
  constructor(
    public httpClient: HttpClient
  ) { }
}
