//ДИРЕКТИВА ngStyle 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c12-directive-ng-style',
  templateUrl: './c12-directive-ng-style.component.html',
  styleUrls: ['./c12-directive-ng-style.component.scss']
})
export class C12DirectiveNgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  getStyles(){
		return {
      "width":"200px",
			"background":"orange",
			"color":"red",
			"font-size":"20px"
		}
	}
}
