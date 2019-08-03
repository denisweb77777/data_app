// Модуль к которому подключается компонент

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// импорт компонента
import { C1ComponentCreationComponent } from './c1-component-creation/c1-component-creation.component';


@NgModule({

  // регистрация компонентов
  declarations: [C1ComponentCreationComponent],
  imports: [
    CommonModule
  ],

  // экспорт компонентов(модулей),если нужно чтобы они были доступны в других модулях(не обязательно).
  exports:[
    C1ComponentCreationComponent
  ]
})
export class M1ComponentCreationModule { }
