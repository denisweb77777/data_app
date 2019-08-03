import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C0MainComponent } from './c0-main/c0-main.component';


const routes: Routes = [
  {
    path: '',
    component: C0MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M2RxjsRoutingModule { }
