//ПРИВЯЗКА К СТИЛЯМ

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c5-binding-style',
  templateUrl: './c5-binding-style.component.html',
  styleUrls: ['./c5-binding-style.component.scss']
})
export class C5BindingStyleComponent implements OnInit {
  public nameProperty: boolean;

  constructor() {
    this.nameProperty = true;
  }

  ngOnInit() { }

  getColor() {
    return "green";
  }

}
