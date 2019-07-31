import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common'
import { ChamadoService } from '../chamado.service';
import {ActivatedRoute} from '@angular/router'
import { Chamado } from '../model/chamado';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-adiciona-chamado',
  templateUrl: './adiciona-chamado.component.html',
  styleUrls: ['./adiciona-chamado.component.scss']
})
export class AdicionaChamadoComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    public chamadoService: ChamadoService,
    public route: ActivatedRoute,
    public location: Location
  ) { }

  //chamadoForm = new FormGroup ({
    //descricaoChamado: new FormControl('')
  //});;
  chamadoForm = this.fb.group({descricaoChamado: ['', Validators.required]})

  ngOnInit() {
  }
  

  onSubmit (): void {
    console.log (this.chamadoForm.value);
    const idFila: number = +this.route.snapshot.paramMap.get("idFila");
    const descricao: string = this.chamadoForm.get ("descricaoChamado").value;
    let chamado: Chamado = {
      id: this.chamadoService.nextId(),
      descricao: descricao,
      status: 'aberto',
      dataAbertura: Date.now().toString(),
      dataFechamento: null,
      descricaoFinalizacao: null,
      idFila: idFila

    };
    this.chamadoService.adicionaChamado(chamado);
    this.location.back();
  }
}
