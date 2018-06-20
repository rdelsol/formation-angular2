import { Component, OnInit, Input } from '@angular/core';
import { CommunService } from '../commun.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title :  string;

  @Input()
  fixedValue : string;
  langue : string = "en";

  constructor(private communService : CommunService) { }

  date:Date;
  ngOnInit() {
    this.date = new Date();
    this.fixedValue += " AJout dans le NG On INIT -->" + this.communService.getAuteur();
  }
  onChangeLangue() {
    // this.langue sera maj via [(ngModel)]="langue"
    // le set langue() sera appelé sur commmunService
    this.communService.langue = this.langue;
  }

}
