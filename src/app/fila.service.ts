import { Injectable } from '@angular/core';
import { Fila } from './model/fila';

@Injectable({
  providedIn: 'root'
})
export class FilaService {

  filas: Fila[] = [
    {id: 1, nome: 'Telefonia'},
    {id: 2, nome: 'Redes'},
    {id: 3, nome: 'Computadores'}
  ];


  adicionaFila (fila: Fila): void {
    this.filas.push(fila);
  }

  getFilas (): Fila []{
    return this.filas;
  }

  nextId(): number{
    //...: operador spread (expande os elementos de um vetor)
    return this.filas.length <= 0 ? 1 : Math.max(...this.filas.map(fila => fila.id)) + 1;
  }

  
  
  constructor() { }
}
