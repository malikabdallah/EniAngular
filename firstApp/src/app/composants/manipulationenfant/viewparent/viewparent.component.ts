import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewenfantComponent } from '../viewenfant/viewenfant.component';

@Component({
  selector: 'app-viewparent',
  templateUrl: './viewparent.component.html',
  styleUrls: ['./viewparent.component.scss']
})
export class ViewparentComponent implements OnInit {


  @ViewChild('vueEnfant')
  vueEnfant:ViewenfantComponent;

  callChidren(){
    this.vueEnfant.showMessage();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
