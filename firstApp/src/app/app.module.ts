import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { GreetingPipe } from './pipes/greeting.pipe';
import { IsMalePipe } from './pipes/is-male.pipe';
import { ItemComponent } from './composants/item/item.component';
import { ListitemComponent } from './composants/listitem/listitem.component';
import { ListTodoComponent } from './composants/liste/list-todo/list-todo.component';
import { TodoComponent } from './composants/liste/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    PipesComponent,
    GreetingPipe,
    IsMalePipe,
    ItemComponent,
    ListitemComponent,
    ListTodoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
