import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';

import { ItemComponent } from './composants/item/item.component';
import { ListitemComponent } from './composants/listitem/listitem.component';
import { ListTodoComponent } from './composants/liste/list-todo/list-todo.component';
import { TodoComponent } from './composants/liste/todo/todo.component';
import { PipesComponent } from './pipes/pipes.component';
import { GreetingPipe } from './pipes/greeting.pipe';
import { IsMalePipe } from './pipes/is-male.pipe';
import { ParentComponent } from './composants/output/parent/parent.component';
import { EnfantComponent } from './composants/output/enfant/enfant.component';
import { ViewenfantComponent } from './composants/manipulationenfant/viewenfant/viewenfant.component';
import { ViewparentComponent } from './composants/manipulationenfant/viewparent/viewparent.component';
import { NumberComponent } from './services/number/number.component';
import { CompteurComponent } from './eventbinding/compteur/compteur.component';
import { ProductFormComponent } from './formulaire/product-form/product-form.component';
import { ReactiveComponent } from './formulaire/reactive/reactive.component';
import { PommesdetailComponent } from './routage/pommesdetail/pommesdetail.component';
import { PommeslistComponent } from './routage/pommeslist/pommeslist.component';
import { BordureDirective } from './directives/bordure.directive';
import { BordureComponent } from './directives/bordure/bordure.component';
import { MycomponentComponent } from './test/mycomponent/mycomponent.component';

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
    TodoComponent,
    ParentComponent,
    EnfantComponent,
    ViewenfantComponent,
    ViewparentComponent,
    NumberComponent,
    CompteurComponent,
    ProductFormComponent,
    ReactiveComponent,
    PommesdetailComponent,
    PommeslistComponent,
    BordureDirective,
    BordureComponent,
    MycomponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
