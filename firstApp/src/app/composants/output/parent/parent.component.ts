import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public messages:string[]=[];


  constructor() { }

  ngOnInit(): void {
  }


  enregistrerMessage(message:string){
    this.messages.push(message);
  }

  enregistrerPoke(){
    this.messages.push("poke recu ");
  }

}

