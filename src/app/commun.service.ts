import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunService {

  private _langue : string = "en"; // ou fr ou es

  public get langue() {
    return this.langue;
  }

  public set langue (l : string) {
    this._langue = l;
    switch (this._langue) {
      case "fr" : this.currentTraduction = this.traduction_fr ; break;
      case "en" : 
      default :
      this.currentTraduction = this.traduction_en ; 
    }
    this.bsCurrentTrad.next(this.currentTraduction);
  }


  private traduction_fr = {
    "compute" : "calculer",
    "rate" : "taux"
  }

  private traduction_en = {
    "compute" : "compute",
    "rate" : "rate"
  }

  private currentTraduction = this.traduction_en;

  public bsCurrentTrad : BehaviorSubject<object> = new BehaviorSubject<object>(this.currentTraduction);

  public getAuteur() : string {
    return "Romain";
  }
  constructor() { }
}
