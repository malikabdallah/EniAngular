import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements OnInit {

  public cpt:number=0;

  public keys:string="";

  public valeur:string="";

  constructor() { }

  ngOnInit(): void {
  }

  incrementer(){
    this.cpt++;
  }


  enregistre(event:KeyboardEvent){
    console.log("event "+event);
    this.keys+=(<HTMLInputElement>event.target).value+",";
  }

  localEvent(value:any){
    console.log(value);
    this.valeur=value;
  }

}
