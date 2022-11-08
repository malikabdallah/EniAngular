import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {

  public content:string="hello";

  constructor(private service:MathService) { }

  ngOnInit(): void {
  }

}
