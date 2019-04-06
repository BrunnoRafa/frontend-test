import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {
  exibeMenu = false;
  tituloCabecalho = 'Controle Financeiro';

  exibirMenu() {
    this.exibeMenu = true;
  }

  fecharMenu() {
    this.exibeMenu = false;
  }
}
