//ДИРЕКТИВА ngFor

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c9-directive-ng-for',
  templateUrl: './c9-directive-ng-for.component.html',
  styleUrls: ['./c9-directive-ng-for.component.scss']
})
export class C9DirectiveNgForComponent implements OnInit {

  items1: string[] = [];   //пример 1
  items2: string[] = [];   //пример 2


  constructor() {

    //Пример 1(директива ngFor).
    for (let i = 0; i < 10; i++) {
      this.items1[i] = "Item(1) " + i;
    }

    //Пример 2(директива ngFor c использованием even и index).
    for (let i = 0; i < 10; i++) {
      this.items2[i] = "Item(2) " + i;
    }
  }

  ngOnInit() { }
}
