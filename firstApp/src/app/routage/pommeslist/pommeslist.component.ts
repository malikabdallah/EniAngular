import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POMMES } from '../mock-pommes';
import { pommes } from '../pommes';

@Component({
  selector: 'app-pommeslist',
  templateUrl: './pommeslist.component.html',
  styleUrls: ['./pommeslist.component.scss']
})
export class PommeslistComponent implements OnInit {

  public pommes:pommes[]=[];
  public page:number
  public pommesperpage:10;
  public hasNext:boolean;

  constructor(private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    console.log("0 "+JSON.stringify(POMMES.slice(0,5)));
    console.log("1 "+JSON.stringify(POMMES.slice(1,5))+" "+(POMMES.slice(1,5).length));
    console.log("taille "+POMMES.length);
/*
   if(this.route.snapshot.params['page'] === undefined){
    this.page=0;
   }else{
      this.page=Number(this.route.snapshot.params['page']);
   }
*/
this.route.params.subscribe( params => 
  {
     this.page = params["page"];
     if(this.route.snapshot.params['page'] === undefined){
      this.page=0;
     }else{
        this.page=Number(this.route.snapshot.params['page']);
     }
        let begin=this.page*10;
      this.pommes=POMMES.slice(begin,(begin+10));

      console.log(JSON.stringify(this.pommes));
      if((begin+10)<POMMES.length){
          this.hasNext=true;
      }else{
        this.hasNext=false;
      }
     // your code continues here
  });

   
  
  }

}
