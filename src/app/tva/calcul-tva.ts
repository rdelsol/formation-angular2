export class CalculTva {
    ht : number;
    tx : number = 25;
    tva : number;
    ttc :  number;
    
    calculer() : void {
        this.tva = this.ht * this.tx / 100;
        this.ttc = Number(this.ht) + Number(this.tva);
    }
}
