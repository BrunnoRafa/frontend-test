import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  transacoes = [];
  totalExtrato: number;

  ngOnInit() {
    this.atualizarExtrato();
  }

  atualiza(event: any) {
    this.atualizarExtrato();
  }

  atualizarExtrato() {
    this.transacoes = JSON.parse(localStorage.getItem('transacoes'));
    this.valorTotalExtrato();
  }

  valorTotalExtrato() {
    this.totalExtrato = null;
    if (this.transacoes !== null) {
      this.transacoes.map((transacao) => {
        if (transacao.tipo === '+') {
          this.totalExtrato += transacao.valor;
        } else {
          this.totalExtrato -= transacao.valor;
        }
      });
    }
  }
}
