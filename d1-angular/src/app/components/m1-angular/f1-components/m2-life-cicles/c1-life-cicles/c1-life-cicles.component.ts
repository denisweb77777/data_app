import { Component, OnInit } from '@angular/core';

//интерфейсы реализующие жизненные циклы компонентов (необходимо импортировать из @angular/core)
import { OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from "@angular/core";


@Component({
  selector: 'app-c1-life-cicles',
  templateUrl: './c1-life-cicles.component.html',
  styleUrls: ['./c1-life-cicles.component.scss']
})

//чтобы использовать в компоненте методы реализующие жизненный цикл необходимо имплементироваться от интерфейсов:
export class C1LifeCiclesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  /*------ Перечень событий определяющих жизненный цикл компонента -----*/

  //срабатывает при инициализации компонента или директивы (первый жизненный этап компонента)
  constructor() {
    console.log("constructor");
  }

  //------------------

  //срабатывает при инициализации компонента или директивы (второй жизненный этап компонента)
  //вызывается один раз после того как компонент отобразится.
  ngOnInit() {
    console.log("ngOnInit");
  }

  //------------------

  //срабатывает в момент изменения компонента или директивы (когда устанавливается значение для input свойства)
  //вызывается до ngOnInit и каждый раз, когда меняется значение input свойства.
  //метод может получать объект типа SimpleChange с информацией о изменениях(новом и старом значениях).
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges", changes);
  }

  //------------------

  //срабатывает при каждой проверке изменений в компоненте или директиве. 
  //вызывается часто.
  ngDoCheck() {
    console.log("ngDoCheck");
  }

  //------------------

  //срабатывает после того как Angular внедряет компонент(например <app-root>) в DOM
  //используется только при работе с компонентами.
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  //------------------

  //срабатывает после каждой проверки внедренного компонента (например <app-root>) в DOM.
  //срабатывает после ngAfterContentInit и после каждого ngDoCheck.
  //используется только при работе с компонентами.
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  //------------------

  //срабатывает после инициализации представления компонента и дочерних компонентов.
  //запускается один раз после ngAfterContentChecked
  //используется только при работе с компонентами.
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  //------------------

  //срабатывает после проверки инициализации представления компонента
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  //------------------

  //срабатывает перед уничтожением компонента или директивы из DOM.
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  //------------------

  //произвольный метод
  nameMethod() {
    console.log("nameMethod");
  }
}
