//ДВУНАПРАВЛЕННАЯ ПРИВЯЗКА

//[(ngModel)] - позволяет динамически менять значение свойств компонента при
//изменении в шаблоне и наоборот (используется с полями ввода).
//Для использования [(ngModel)] необходимо в модуле компонента подключить FormModule!!!

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c7-two-way-binding',
  templateUrl: './c7-two-way-binding.component.html',
  styleUrls: ['./c7-two-way-binding.component.scss']
})
export class C7TwoWayBindingComponent implements OnInit {

  //если будет присвоено значение данному свойству оно запишется и в поле input шаблона.
  public value: string;

  constructor() {
    this.value = "Some text";
  }

  ngOnInit() { }
}
