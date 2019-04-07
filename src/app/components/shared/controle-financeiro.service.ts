import { Injectable } from '@angular/core';

import { ControleFinanceiroModel } from './controle-financeiro.model';

@Injectable()
export class ControleFinanceiroService {
    transacoes = [];

    constructor() {
        // localStorage.removeItem('transacoes');
    }

    incluirTransacao(model: ControleFinanceiroModel) {
        let tipo = '';

        (model.tipoTransacao == '1') ? tipo = '-' : tipo = '+';
        if (localStorage.getItem('transacoes') != null) {
            this.transacoes = JSON.parse(localStorage.getItem('transacoes'));
            this.transacoes.push({
                tipo: tipo,
                descricao: model.nomeMercadoria,
                valor: model.valorMercadoria
            });
        } else {
            this.transacoes = [{
                tipo: tipo,
                descricao: model.nomeMercadoria,
                valor: model.valorMercadoria
            }];
        }

        localStorage.setItem('transacoes', JSON.stringify(this.transacoes));
    }
}
