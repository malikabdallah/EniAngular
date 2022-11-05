import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {

  public today = new Date();
  public name="Malik";
  public isMale=true;
  public personnes:Personne[]=[
    {name:"johnson",isMale:true},
    {name:"oliveira",isMale:true},
    {name:"maila",isMale:false},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}


export interface Personne {
  name:string;
  isMale:boolean;
}