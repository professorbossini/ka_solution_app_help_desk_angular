import { Component, OnInit, ViewChild } from '@angular/core';
import {ChamadosComponent} from '../chamados/chamados.component'
import { FilaService } from '../fila.service';
import { Fila } from '../model/fila';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styleUrls: ['./filas.component.scss']
})
export class FilasComponent implements OnInit {

  @ViewChild (ChamadosComponent) chamadosComponent: ChamadosComponent;
  filaSelecionada: Fila;
  filas: Fila [];

  onSelectFila (fila: Fila){
    this.filaSelecionada = fila;
    if (this.chamadosComponent)
      this.chamadosComponent.atualizaFila(fila);
  }

  adicionarFila (): void{
    console.log("testando o adicionarFila");
  }

  constructor(
    public filaService: FilaService
  ) { }

  ngOnInit() {
    this.filaService.getFilas().subscribe((filas) => {
      console.log ("Atualizou o filas: " + filas)
      this.filas = filas;
    });
  }

}
