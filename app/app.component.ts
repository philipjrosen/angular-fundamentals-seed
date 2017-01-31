import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class='app'>
      <h1>{{ title }}</h1>
      <h1 [innerHtml]="title"></h1>
      <img [src]="logo">
      <input type="text" [value]="name">
      <div>{{ name }}</div>
    </div>
  `
})

export class AppComponent {
  title: string;
  name: string = "Philip";
  logo: string = 'img/angular.png';
  constructor() {
    this.title = 'Ultimate Angular';
  }
}
