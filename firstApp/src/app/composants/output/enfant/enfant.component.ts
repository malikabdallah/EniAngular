import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  public message:string="";

  @Output()
  public eventMessage:EventEmitter<string>=new EventEmitter<string>();


  @Output()
  public eventPoke:EventEmitter<void>=new EventEmitter<void>();



  constructor() { }

  ngOnInit(): void {
  }



  envoyerMessage(){
    this.eventMessage.emit(this.message);
    this.message="";
  }

  envoyerPoke(){
    this.eventPoke.emit();

  }

}
