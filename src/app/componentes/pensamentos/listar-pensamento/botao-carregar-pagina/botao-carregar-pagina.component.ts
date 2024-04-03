import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-pagina',
  templateUrl: './botao-carregar-pagina.component.html',
  styleUrls: ['./botao-carregar-pagina.component.css']
})
export class BotaoCarregarPaginaComponent implements OnInit {

  @Input() maisPensamentos: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
