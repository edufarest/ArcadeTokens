import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TokensComponent } from './tokens/tokens.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LedgerComponent } from './ledger/ledger.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    TopBarComponent,
    TokensComponent,
    LedgerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ItemListComponent},
      {path: 'tokens', component: TokensComponent},
      {path: 'ledger', component: LedgerComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
