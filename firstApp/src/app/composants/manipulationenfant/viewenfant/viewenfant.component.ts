import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewenfant',
  templateUrl: './viewenfant.component.html',
  styleUrls: ['./viewenfant.component.scss']
})
export class ViewenfantComponent implements OnInit {

  
  public text:string;

  public showMessage(){
    alert("le texte enfant "+this.text);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
