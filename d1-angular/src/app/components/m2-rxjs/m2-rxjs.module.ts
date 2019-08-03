import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routing
import { M2RxjsRoutingModule } from './m2-rxjs-routing.module';
//components
import { C0MainComponent } from './c0-main/c0-main.component';


@NgModule({
  declarations: [C0MainComponent],
  imports: [
    CommonModule,
    M2RxjsRoutingModule
  ]
})
export class M2RxjsModule { }
