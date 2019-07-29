import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pessoal-helpdesk';

  filas = [
    {id: 1, nome: 'Telefonia'},
    {id: 2, nome: 'Redes'},
    {id: 3, nome: 'Computadores'}
  ];

  adicionarFila (): void{
    console.log("testando o adicionarFila");
  }
}
