import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//FlexLayoutModule
import { FlexLayoutModule } from '@angular/flex-layout';
//routing
import { M3MaterialRoutingModule } from './m3-material-routing.module';
//MaterialModule
import { MaterialModule } from 'src/app/shared/material.module';
//components
import { C0MainComponent } from './c0-main/c0-main.component';
import { C1ButtonComponent } from './f1-Button&Indicators/c1-button/c1-button.component';


@NgModule({
  declarations: [C0MainComponent, C1ButtonComponent],
  imports: [
    CommonModule,
    M3MaterialRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class M3MaterialModule { }
