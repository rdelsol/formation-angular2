import { Component, OnInit, ViewChild,  } from '@angular/core';
import { Client } from './client';
import { NgForm, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionGroup: FormGroup;


  client : Client = new Client();
  submitted:boolean = false;
  constructor(private fb:FormBuilder) { }

  onInscription() : void {
    this.submitted = true;
    this.client.prenom = this.inscriptionGroup.get('prenom').value;
    this.client.nom = this.inscriptionGroup.get('nom').value;
    this.client.telephone = this.inscriptionGroup.get('telephone').value;
    this.client.age = this.inscriptionGroup.get('age').value;
    this.client.email = this.inscriptionGroup.get('email').value;    
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
