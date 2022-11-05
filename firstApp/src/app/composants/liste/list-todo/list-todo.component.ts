import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../Todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  public newTodoText:string;
  todoList: TodoModel[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  delete(todo:TodoModel){
    let index=this.todoList.findIndex(t=>{
      return t == todo;
    })
    if (index != -1){
      this.todoList.splice(index,1);
    }else{
      alert("index non existant");
    }
  }

  addTodo(){
    if(this.newTodoText){
      this.todoList.push({
        text: this.newTodoText,
        checked:false
      })
    
    this.newTodoText='';
    }else{
      alert("aucun text saisie")
    }
  }

}
