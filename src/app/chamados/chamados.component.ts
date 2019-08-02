import { Component, OnInit, Input } from '@angular/core';
import { ChamadoService } from '../chamado.service';
import { Fila } from '../model/fila';
import { Chamado } from '../model/chamado';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {

  @Input() fila: Fila;

  chamados: Chamado [];
  idFila: number;
  constructor(
    public chamadoService: ChamadoService,
    public route: ActivatedRoute
  ) {
    
   }

  ngOnInit() {
    //this.chamados = this.chamadoService.getChamadosPorFila(this.fila);
    //+ converte para number
    //const idFila = +this.route.snapshot.paramMap.get('idFila');
    this.idFila = +this.route.snapshot.paramMap.get('idFila');
    console.log(this.idFila);
    //this.chamados = this.chamadoService.getChamadosPorId (this.idFila);
    this.chamadoService.getChamadosPorId(this.idFila).subscribe(chamados => 
      this.chamados = chamados
    )
  }

  atualizaFila (fila: Fila): void{
    this.fila = fila;
    //this.chamados = this.chamadoService.getChamadosPorFila(this.fila);
    this.chamadoService.getChamadosPorFila(this.fila).subscribe( chamados =>{
      this.chamados = chamados;
    })
  }
}
