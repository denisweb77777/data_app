//ПРИВЯЗКА К  СОБЫТИЯМ

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3-binding-events',
  templateUrl: './c3-binding-events.component.html',
  styleUrls: ['./c3-binding-events.component.scss']
})
export class C3BindingEventsComponent implements OnInit {
  private message: string;

  constructor() { }
  ngOnInit() { }

  //--------------------

  //Пример 1(привязка к событию).
  nameMethod1() {
    alert("nameMethod1");
  }

  //---------------------

  //Пример 2(привязка к событию с передачей дополнительной информации о событии).
  nameMethod2(event: any) {
    this.message = event.type;
    console.log(this.message);
    console.log(event);
  }

  //----------------------

  //Пример 3(привязка к событиям с использованием reference variable).
  nameMethod3(data) {
    this.message = data;
    console.log(this.message);
  }

  //----------------------

  //Пример 4(привязка к событию с указанием клавиши которую необходимо обработать).
  
  //Вариант 1
  nameMethod4a() {
    alert("Hello!");
  }

  //Вариант 2
  nameMethod4b(data) {
    this.message = data;
    console.log(this.message);
  }
}
