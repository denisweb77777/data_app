//ПРИВЯЗКА К КЛАССУ HTML-ЭЛЕМЕНТА 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c4-binding-class',
  templateUrl: './c4-binding-class.component.html',
  styleUrls: ['./c4-binding-class.component.scss']
})
export class C4BindingClassComponent implements OnInit {
  public addClass1: string;
  public addClass2: boolean;

  constructor() { }
  ngOnInit() { }

  //Пример 1(привязка к классу html-элемента)
  addClassRed1() {
    this.addClass1 = "red";
  }
  addClassGreen1() {
    this.addClass1 = "green";
  }

  //------------------

  //Пример 2(привязка к классу html-элемента по имени класса)
  addClassRed2(){
		//если true то указанный класс будет добавлен к элементу (false-нет)
		this.addClass2 = true;
	}
}
