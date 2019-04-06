import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extrato-transacao',
  templateUrl: './extrato-transacao.component.html',
  styleUrls: ['./extrato-transacao.component.scss']
})

export class ExtratoTransacaoComponent {

  @Input() transacoes: any[];
  @Input() valorTotal: number;
}
