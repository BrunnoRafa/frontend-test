import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ng2InputMaskModule } from 'ng2-input-mask';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho.component';
import { FormTransacaoComponent } from './components/form-transacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FormTransacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
