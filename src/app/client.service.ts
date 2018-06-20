import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './inscription/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private inscriptionUrlBase : string  = "tp/inscription";

  constructor(private http : HttpClient) { 

  }

  public getTabInscriptionsObservable() : Observable<Client[]> {  
      let inscriptionUrl : string = null;  
      inscriptionUrl = this.inscriptionUrlBase ;
      console.log( "inscriptionUrl = " + inscriptionUrl); 
      return this.http.get<Client[]>(inscriptionUrl );  
  }

  public postInscriptionObservable(client : Client):Observable<Client> {
    let inscriptionUrl : string = this.inscriptionUrlBase ;
    return this.http.post<Client>(inscriptionUrl, client);
  }
}
