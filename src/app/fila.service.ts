import { Injectable } from '@angular/core';
import { Fila } from './model/fila';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FilaService {

  private filasUrl = 'api/filas';
  //variável definida no corpo da classe
  httpOptions = {
    headers: new HttpHeaders ({'Content-Type': 'application/json'})
  }

  filas: Fila[] = [
    {id: 1, nome: 'Telefonia'},
    {id: 2, nome: 'Redes'},
    {id: 13, nome: 'Computadores'}
  ];


  adicionaFila (fila: Fila): Observable <Fila> {
    //this.filas.push(fila);
    return this.httpClient.post<Fila>(this.filasUrl, fila, this.httpOptions)
  }

  getFilas (): Observable<Fila []>{
    //return of (this.filas);
    return this.httpClient.get <Fila[]> (this.filasUrl).pipe(
      catchError ( erro => {
        console.log (`Falhou: ${erro}`)
        return of([]);
      })
    )
  }

  nextId(): number{
    //...: operador spread (expande os elementos de um vetor)
    return this.filas.length <= 0 ? 1 : Math.max(...this.filas.map(fila => fila.id)) + 1;
  }



  
  
  constructor(
    public httpClient: HttpClient
  ) { }
}
