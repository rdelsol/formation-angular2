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

@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    LoginComponent,
    InscriptionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule,  ReactiveFormsModule , NgbModule.forRoot(), UtilModule
  ],
  providers: [CommunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
