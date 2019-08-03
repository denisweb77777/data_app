//ПРИВЯЗКА К АТРИБУТАМ HTML-ЭЛЕМЕНТА

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c6-binding-attribute',
  templateUrl: './c6-binding-attribute.component.html',
  styleUrls: ['./c6-binding-attribute.component.scss']
})
export class C6BindingAttributeComponent implements OnInit {

  public nameProperty: string = "../../../../../../assets/img/angular/directives/image.gif";

  constructor() { }

  ngOnInit() {
  }

}
