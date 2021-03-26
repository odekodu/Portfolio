import { Component } from '@angular/core';
import { fade } from './animations/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fade()
  ]
})
export class AppComponent {
  showMenu = false;
  get theme() {
    return document.documentElement.getAttribute('data-theme') == 'dark'
      ? false
      : true;
  }

  set theme(flag: boolean) {
    const value = flag ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', value);
    localStorage.setItem('data-theme', value);
  }

  constructor() {
    this.theme = localStorage.getItem('data-theme') == 'dark' ? false : true;
    console.log(this.theme);
    
  }
}
