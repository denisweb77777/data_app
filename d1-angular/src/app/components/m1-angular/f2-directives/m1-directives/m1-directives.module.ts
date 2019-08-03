import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { C1InterpolationComponent } from './c1-interpolation/c1-interpolation.component';
import { C2BindingPropertyComponent } from './c2-binding-property/c2-binding-property.component';
import { C3BindingEventsComponent } from './c3-binding-events/c3-binding-events.component';
import { C4BindingClassComponent } from './c4-binding-class/c4-binding-class.component';
import { C5BindingStyleComponent } from './c5-binding-style/c5-binding-style.component';
import { C6BindingAttributeComponent } from './c6-binding-attribute/c6-binding-attribute.component';
import { C7TwoWayBindingComponent } from './c7-two-way-binding/c7-two-way-binding.component';
import { C8DirectiveNgIfComponent } from './c8-directive-ng-if/c8-directive-ng-if.component';
import { C9DirectiveNgForComponent } from './c9-directive-ng-for/c9-directive-ng-for.component';
import { C10DirectiveNgSwitchComponent } from './c10-directive-ng-switch/c10-directive-ng-switch.component';
import { C11DirectiveNgClassComponent } from './c11-directive-ng-class/c11-directive-ng-class.component';
import { C12DirectiveNgStyleComponent } from './c12-directive-ng-style/c12-directive-ng-style.component';

@NgModule({
  declarations: [C1InterpolationComponent,  C2BindingPropertyComponent , C3BindingEventsComponent, C4BindingClassComponent, C5BindingStyleComponent, C6BindingAttributeComponent, C7TwoWayBindingComponent, C8DirectiveNgIfComponent, C9DirectiveNgForComponent, C10DirectiveNgSwitchComponent, C11DirectiveNgClassComponent,  C12DirectiveNgStyleComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class M1DirectivesModule { }


