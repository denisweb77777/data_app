import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//FlexLayoutModule
import { FlexLayoutModule } from '@angular/flex-layout';
//routing
import { M1AngularRoutingModule } from './m1-angular-routing.module';
//MaterialModule
import { MaterialModule } from 'src/app/shared/material.module';
//components
import { C0MainComponent } from './c0-main/c0-main.component';
//modules
import { M1ComponentCreationModule } from './f1-components/m1-component-creation/m1-component-creation.module';
import { M2LifeCiclesModule } from './f1-components/m2-life-cicles/m2-life-cicles.module';
import { M1DirectivesModule } from './f2-directives/m1-directives/m1-directives.module';


@NgModule({
  declarations: [C0MainComponent],
  imports: [
    //service modules
    CommonModule,
    M1AngularRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    //users modules
    M1ComponentCreationModule,
    M2LifeCiclesModule,
    M1DirectivesModule,


  ]
})
export class M1AngularModule { }
