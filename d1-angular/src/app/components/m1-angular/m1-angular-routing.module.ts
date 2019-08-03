import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C0MainComponent } from './c0-main/c0-main.component';
import { C1ComponentCreationComponent } from './f1-components/m1-component-creation/c1-component-creation/c1-component-creation.component';
import { C1LifeCiclesComponent } from './f1-components/m2-life-cicles/c1-life-cicles/c1-life-cicles.component';
import { C1InterpolationComponent } from './f2-directives/m1-directives/c1-interpolation/c1-interpolation.component';
import { C2BindingPropertyComponent } from './f2-directives/m1-directives/c2-binding-property/c2-binding-property.component';
import { C3BindingEventsComponent } from './f2-directives/m1-directives/c3-binding-events/c3-binding-events.component';
import { C4BindingClassComponent } from './f2-directives/m1-directives/c4-binding-class/c4-binding-class.component';
import { C5BindingStyleComponent } from './f2-directives/m1-directives/c5-binding-style/c5-binding-style.component';
import { C6BindingAttributeComponent } from './f2-directives/m1-directives/c6-binding-attribute/c6-binding-attribute.component';
import { C7TwoWayBindingComponent } from './f2-directives/m1-directives/c7-two-way-binding/c7-two-way-binding.component';
import { C9DirectiveNgForComponent } from './f2-directives/m1-directives/c9-directive-ng-for/c9-directive-ng-for.component';
import { C8DirectiveNgIfComponent } from './f2-directives/m1-directives/c8-directive-ng-if/c8-directive-ng-if.component';
import { C10DirectiveNgSwitchComponent } from './f2-directives/m1-directives/c10-directive-ng-switch/c10-directive-ng-switch.component';
import { C11DirectiveNgClassComponent } from './f2-directives/m1-directives/c11-directive-ng-class/c11-directive-ng-class.component';
import { C12DirectiveNgStyleComponent } from './f2-directives/m1-directives/c12-directive-ng-style/c12-directive-ng-style.component';

const routes: Routes = [
  {
    path:'',
    component:C0MainComponent,children:[
      //Components
      {path:'component-сreation', component:C1ComponentCreationComponent},
      {path:'life-cicles', component:C1LifeCiclesComponent},
      //Directives
      {path:'interpolation', component:C1InterpolationComponent},
      {path:'binding-property', component:C2BindingPropertyComponent},
      {path:'binding-events', component:C3BindingEventsComponent},
      {path:'binding-class', component:C4BindingClassComponent},
      {path:'binding-style', component:C5BindingStyleComponent},
      {path:'binding-attribute', component:C6BindingAttributeComponent},
      {path:'two-way-binding', component:C7TwoWayBindingComponent},
      {path:'directive-ng-if', component:C8DirectiveNgIfComponent},
      {path:'directive-ng-for', component:C9DirectiveNgForComponent},
      {path:'directive-ng-switch', component:C10DirectiveNgSwitchComponent},
      {path:'directive-ng-class', component:C11DirectiveNgClassComponent},
      {path:'directive-ng-style', component:C12DirectiveNgStyleComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M1AngularRoutingModule { }
