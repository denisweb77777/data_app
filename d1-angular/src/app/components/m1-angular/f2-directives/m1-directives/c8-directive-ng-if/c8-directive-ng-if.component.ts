//ДИРЕКТИВА ngIf

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c8-directive-ng-if',
  templateUrl: './c8-directive-ng-if.component.html',
  styleUrls: ['./c8-directive-ng-if.component.scss']
})
export class C8DirectiveNgIfComponent implements OnInit {

  public value: boolean;

  constructor() {
    this.value = true;
  }

  ngOnInit() { }
}
