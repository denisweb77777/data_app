//ИНТЕРПОЛЯЦИЯ

//данные полученные в блоке интерполяции {{}} приводятся к строке.
//результат выражения полученный в блоке интерполяции {{}} приводится к строке.
//в блоке интерполяции {{}} может быть выполнено любое js-выражение.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1-interpolation',
  templateUrl: './c1-interpolation.component.html',
  styleUrls: ['./c1-interpolation.component.scss']
})
export class C1InterpolationComponent implements OnInit {

  public nameProperty1:string;
  public nameProperty2:string;
  public nameProperty3:string;
  
  constructor() { 

    //Пример 1 (привязка к свойству компонента)
    this.nameProperty1 = "nameProperty1";
  }

  ngOnInit() {}

  //Пример 2 (привязка к методу компонента)
  nameMethod1(){
    return this.nameProperty2 = "nameProperty2";
  }

  //Пример 3 (js-выражение в блоке интерполяции)
  nameMethod2(){
    return this.nameProperty3 = "name";
  }
}
