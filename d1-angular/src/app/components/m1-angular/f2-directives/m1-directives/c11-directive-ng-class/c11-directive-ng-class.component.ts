//ДИРЕКТИВА ngClass

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c11-directive-ng-class',
  templateUrl: './c11-directive-ng-class.component.html',
  styleUrls: ['./c11-directive-ng-class.component.scss']
})
export class C11DirectiveNgClassComponent implements OnInit {

  //Пример 1 (использование объекта)
  public settings:object = {
		sizes1:true,
		color1:true,
		border1:false
	}

  //Пример 2 (использование массива)
  public array:string[] = ['sizes2','color2'];

  //Пример 3 (использование строки)
  public str:string = 'sizes3';
  
  

  constructor() { }
  ngOnInit() { }

}
