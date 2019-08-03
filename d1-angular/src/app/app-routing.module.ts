import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular',
    loadChildren:'./components/m1-angular/m1-angular.module#M1AngularModule'
  },
  {
    path: 'rxjs',
    loadChildren:'./components/m2-rxjs/m2-rxjs.module#M2RxjsModule'
  },
  {
    path: 'material',
    loadChildren:'./components/m3-material/m3-material.module#M3MaterialModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
