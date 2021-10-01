import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { KarolinecurrencyComponent } from './karolinecurrency/karolinecurrency.component';
import { KarolinewalletComponent } from './karolinewallet/karolinewallet.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { KarolinewalletService } from './karolinewallet.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: 'karolinecurrency', component: KarolinecurrencyComponent},
      {path: 'karolinewallet', component: KarolinewalletComponent}
    ]),
    HttpClientModule
   ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    NavbarComponent,
    KarolinecurrencyComponent,
    KarolinewalletComponent
   ],
  bootstrap:    [ AppComponent ],
  providers: [ KarolinewalletService ]
})
export class AppModule { }
