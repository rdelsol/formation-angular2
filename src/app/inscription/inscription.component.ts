import { Component, OnInit, ViewChild,  } from '@angular/core';
import { Client } from './client';
import { NgForm, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionGroup: FormGroup;


  client : Client = new Client();
  submitted:boolean = false;
  tabCLients : Client[] = [];

  constructor(private clientService : ClientService) { }

  onInscription() : void {
    this.submitted = true;
    this.client.prenom = this.inscriptionGroup.get('prenom').value;
    this.client.nom = this.inscriptionGroup.get('nom').value;
    this.client.telephone = this.inscriptionGroup.get('telephone').value;
    this.client.age = this.inscriptionGroup.get('age').value;
    this.client.email = this.inscriptionGroup.get('email').value;    

    this.clientService.postInscriptionObservable(this.client)
    .subscribe(
      (clientEnregistre) => {this.client = clientEnregistre; this.onSearchClients()},
      (error) => console.log(error)
     );
  }

  onSearchClients () {
    this.clientService.getTabInscriptionsObservable()
                      .subscribe(
                        (tabInscription) => {this.tabCLients = tabInscription},
                        (error) => console.log(error)
                       );
  }
  

  onResetForm() {
    this.client = new Client();
    this.submitted = false;
  }

  ngOnInit() {
    this.inscriptionGroup = new FormGroup({
      telephone : new FormControl('',  [Validators.required , Validators.minLength(10)]),
      prenom : new FormControl('',  [Validators.required , Validators.minLength(2)]),
      nom : new FormControl('',  [Validators.required , Validators.minLength(2)]),
      age : new FormControl('',  Validators.required ),
      email : new FormControl('',  [Validators.required , Validators.minLength(2)]),
    });
  }
}
