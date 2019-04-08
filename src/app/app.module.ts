import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxCurrencyModule } from 'ngx-currency';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho.component';
import { FormTransacaoComponent } from './components/form-transacao.component';
import { ExtratoTransacaoComponent } from './components/extrato-transacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FormTransacaoComponent,
    ExtratoTransacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
