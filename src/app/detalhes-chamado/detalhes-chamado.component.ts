import { Component, OnInit } from '@angular/core';
import {ChamadoService} from '../chamado.service'
import { Chamado } from '../model/chamado';
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'
@Component({
  selector: 'app-detalhes-chamado',
  templateUrl: './detalhes-chamado.component.html',
  styleUrls: ['./detalhes-chamado.component.scss']
})
export class DetalhesChamadoComponent implements OnInit {

  chamado: Chamado;
  descricaoFinalizacao: string;
  constructor(
    private chamadoService: ChamadoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const idChamado: number = +this.route.snapshot.paramMap.get ("idChamado");
    this.chamado = this.chamadoService.getChamadoPeloId(idChamado);
  }

  finalizaChamado (idChamado: number): void{
    if (confirm ("Deseja fechar o chamado?")){
      this.chamadoService.finalizaChamado(idChamado, this.descricaoFinalizacao);
      this.location.back();
    }
  }

}
