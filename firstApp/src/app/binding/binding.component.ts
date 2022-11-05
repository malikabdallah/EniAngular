import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
   public listName = 'MA TODO LIST';
   public isDirty:boolean=true;
   public newTodo = 'test';
   public todo = '';
   public todos:String[] =[];


//code snippet
public code ="{{code}}";
public url='';

  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.isDirty=!this.isDirty;
  }

  changeTwo(){
    this.newTodo=(Math.random()*10).toString();
  }

  createTodo(){
    if(this.todo){
      this.todos.push(this.todo);
      this.todo='';
    }
  }

  changeThree(){
    this.todos.push((Math.random()*41).toString());
  }


}
