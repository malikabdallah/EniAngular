import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POMMES } from '../mock-pommes';
import { pommes } from '../pommes';
import { PommesService } from '../pommes.service';

@Component({
  selector: 'app-pommesdetail',
  templateUrl: './pommesdetail.component.html',
  styleUrls: ['./pommesdetail.component.scss']
})
export class PommesdetailComponent implements OnInit {

  public pomme:pommes;
  public id:string;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:PommesService) { 
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.pomme=POMMES[Number(this.id)];

  }

  liste(){
    this.router.navigate(['routing/pommes']);
  }

}
