import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {

  public isChecked=false;
  public text="faire les course";


  constructor() { }

  ngOnInit(): void {
  }

}
