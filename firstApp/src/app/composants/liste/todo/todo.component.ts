import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { TodoModel } from '../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
 
  @Input()
  public todo:TodoModel;

  @Output()
  deleteTrigger: EventEmitter<TodoModel> = new EventEmitter<TodoModel>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.deleteTrigger.emit(this.todo);
  }

}
