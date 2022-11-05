import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ListitemComponent } from './composants/listitem/listitem.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: 'binding', component: BindingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'composant', component:ListitemComponent},
  { path: 'composant/input',component:li}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
