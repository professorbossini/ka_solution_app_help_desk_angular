import { Component, OnInit } from '@angular/core';
import { FilaService } from '../fila.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-adiciona-fila',
  templateUrl: './adiciona-fila.component.html',
  styleUrls: ['./adiciona-fila.component.scss']
})
export class AdicionaFilaComponent implements OnInit {

  nomeFila: string;

  adicionaFila (): void {
    if (this.nomeFila){
      //window.alert ("Fila adicionada com sucesso!");
      //qual id usar?
      this.filaService.adicionaFila({id: this.filaService.nextId(), nome: this.nomeFila});
      this.location.back();

    }
    else{
      window.alert ('Você deve preencher o nome da fila!');
    }
  }

  constructor(
    private filaService: FilaService,
    private location: Location
  ) { }

  voltar (): void {
    this.location.back();
  }
  ngOnInit() {
  }

}
