import { Component, OnInit } from '@angular/core';
import { FilaService } from '../fila.service';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styleUrls: ['./filas.component.scss']
})
export class FilasComponent implements OnInit {



  adicionarFila (): void{
    console.log("testando o adicionarFila");
  }

  constructor(
    public filaService: FilaService
  ) { }

  ngOnInit() {
  }

}
