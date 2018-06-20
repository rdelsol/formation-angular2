import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { TvaComponent } from './tva/tva.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UtilModule } from '../util/util.module';
import { HeaderComponent } from './header/header.component';
import { CommunService } from './commun.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component'; 
import { RouterModule } from '@angular/router';
import { Partie2Component } from './partie2/partie2.component';
import { ListeProdComponent } from './partie2/liste-prod/liste-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    LoginComponent,
    InscriptionComponent,
    HeaderComponent,
    WelcomeComponent,
    Partie2Component,
    ListeProdComponent
  ],
  imports: [
    BrowserModule, FormsModule,  ReactiveFormsModule ,
     NgbModule.forRoot(), UtilModule, HttpClientModule,
     RouterModule.forRoot([
       { path : 'welcome', component: WelcomeComponent },
       { path: '' , redirectTo: 'welcome', pathMatch : 'full'},
       { path: 'partie2' , component : Partie2Component ,
        children : [
          { path: 'listeProd/:categorie', component: ListeProdComponent },
        { path: '', redirectTo: 'listeProd/promo', pathMatch: 'prefix'}
        ]
      }
     ])
  ],
  providers: [CommunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
