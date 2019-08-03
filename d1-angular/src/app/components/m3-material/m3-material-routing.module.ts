import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C0MainComponent } from './c0-main/c0-main.component';
import { C1ButtonComponent } from './f1-Button&Indicators/c1-button/c1-button.component';


const routes: Routes = [
  {
    path: '',
    component: C0MainComponent, children:[
      {path:'button', component:C1ButtonComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M3MaterialRoutingModule { }
