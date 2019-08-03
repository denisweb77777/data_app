//ДИРЕКТИВА ngSwitch

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c10-directive-ng-switch',
  templateUrl: './c10-directive-ng-switch.component.html',
  styleUrls: ['./c10-directive-ng-switch.component.scss']
})
export class C10DirectiveNgSwitchComponent implements OnInit {

  public choice: string;

  constructor() { }

  ngOnInit() { }
}
