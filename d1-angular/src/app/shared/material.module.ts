import { NgModule } from '@angular/core';

//Buttons & Indicators
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

//Layout
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    imports: [
        //Buttons & Indicators
        MatButtonModule,
        MatButtonToggleModule,

        //Layout
        MatListModule,
        MatExpansionModule,
    ],
    exports: [
        //Buttons & Indicators
        MatButtonModule,
        MatButtonToggleModule,

        //Layout
        MatListModule,
        MatExpansionModule,
    ],
})
export class MaterialModule { }

