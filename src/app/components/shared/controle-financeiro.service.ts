import { Injectable } from '@angular/core';

import { ControleFinanceiroModel } from './controle-financeiro.model';

const teste = [
    { tipo: '+', descricao: 'Teste Mercadoria', valor: 10 },
    { tipo: '-', descricao: 'Teste Mercadoria 1', valor: 15 },
    { tipo: '+', descricao: 'Teste Mercadoria 2', valor: 12 }
];

@Injectable()
export class ControleFinanceiroService {
    transacoes = [];

    constructor() {
        // localStorage.setItem('transacoes', JSON.stringify(teste));
        localStorage.removeItem('transacoes');
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
