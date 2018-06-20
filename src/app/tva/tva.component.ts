import { Component, OnInit } from '@angular/core';
import { CalculTva } from './calcul-tva';
import { CommunService } from '../commun.service';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent implements OnInit {

  constructor(private communService : CommunService) {
    communService.bsCurrentTrad.subscribe(currentTrad => {
      this.traduction = currentTrad ;
    });
   }
  private traduction : object;

  calculTva : CalculTva = new CalculTva();
  onCalculer() : void {
    this.calculTva.calculer();
  }

  setCssClasses (value : number) {
    return {
      positif : value >=0,
      negatif : value < 0
    }
  }
  

  ngOnInit() {
  }

}
