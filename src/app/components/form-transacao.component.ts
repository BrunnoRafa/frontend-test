import { Component, Output, EventEmitter } from '@angular/core';

import { ControleFinanceiroService } from './shared/controle-financeiro.service';
import { ControleFinanceiroModel } from './shared/controle-financeiro.model';

@Component({
  selector: 'app-form-transacao',
  templateUrl: './form-transacao.component.html',
  styleUrls: ['./form-transacao.component.scss']
})
export class FormTransacaoComponent {
    model = new ControleFinanceiroModel();
    service: ControleFinanceiroService;

    @Output() atualiza: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
      this.service = new ControleFinanceiroService();
    }

    adicionarTransacao() {
        this.service.incluirTransacao(this.model);
        this.model = new ControleFinanceiroModel();
        this.atualiza.emit(true);
    }
}
