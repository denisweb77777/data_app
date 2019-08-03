//ПРИВЯЗКА К СВОЙСТВУ HTML-элемента

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2-binding-property',
  templateUrl: './c2-binding-property.component.html',
  styleUrls: ['./c2-binding-property.component.scss']
})
export class C2BindingPropertyComponent implements OnInit {


  //Пример 1 (привязка к свойству)
  //нельзя использовать с собственными свойствами(самостоятельно созданными).
  public imageSrc1: string = "../../../../../../assets/img/angular/directives/image.gif";

  //Пример 2 (привязка к свойству используя интерполяцию):
  //с некоторыми свойствами html-элемента данных подход может не работать.
  //можно использовать с собственными свойствами(самостоятельно созданными).
  public imageSrc2: string = "../../../../../../assets/img/angular/directives/image.gif";

  constructor() { }

  ngOnInit() {

  }

}
