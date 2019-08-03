
//импорт декоратора Component и интерфейса OnInit из модуля @angular/core
import { Component, OnInit } from '@angular/core';

// применение декоратора Component для класса C1ComponentCreationComponent
@Component({

  /*----------- Метаданные компонента ---------------*/

  //селектор(тега), для вызова html-кода и логики данного компонента:
  selector: 'app-c1-component-creation',
  //селектор(атрибута):
  /*selector: '[app-attribute]',*/
  //селектор(класса):
  /*selector:'.app-class',*/

  //html-шаблон компонента:
  templateUrl: './c1-component-creation.component.html',
  //html-шаблон прямо в компоненте(в обратных кавычках):
  /*
  template:`                         
    <h2>Hello world!</h2>
    <hr>
  `,
  */

  //массив стилей для компонента
  styleUrls: ['./c1-component-creation.component.scss'],
  //стили прямо в компоненте
  /*
  styles: [`
  h2{ 
    color:red;
  }
  `]
  */
})

//класс определяющий логику компонента (код обслуживающий шаблон компонента)
//export - означает что AppComponent будет доступен в других модулях.
export class C1ComponentCreationComponent implements OnInit {

  //конструктор компонента
  constructor() { }

  //метод определяющий жизненный цикл компонента
  ngOnInit() {
  }
}
