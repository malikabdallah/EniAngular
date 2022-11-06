import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ListTodoComponent } from './composants/liste/list-todo/list-todo.component';
import { ListitemComponent } from './composants/listitem/listitem.component';
import { ViewparentComponent } from './composants/manipulationenfant/viewparent/viewparent.component';
import { ParentComponent } from './composants/output/parent/parent.component';
import { CompteurComponent } from './eventbinding/compteur/compteur.component';
import { PipesComponent } from './pipes/pipes.component';
import { NumberComponent } from './services/number/number.component';

const routes: Routes = [
  { path: 'binding', component: BindingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'composant', component:ListitemComponent},
  { path: 'composant/input',component:ListTodoComponent},
  { path: 'composant/output',component:ParentComponent},
  { path: 'composant/view',component:ViewparentComponent},
  { path: 'service',component:NumberComponent},
  { path: 'event/increment',component:CompteurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
