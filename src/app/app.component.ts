import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { fade } from './animations/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fade()
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  showMenu = false;
  url: string = "";
  menuLinks = ["ABOUT", "PROJECTS", "EXPERIENCE", "CONTACT"];

  get index() {
    const len = this.menuLinks.length - 1;
    const pos = this.menuLinks.indexOf(this.url.replace('/', '').toUpperCase());
    const index = pos >= len
      ? { prev: len - 1, next: 0 }
      : pos <= 0
        ? { prev: len, next: 1 }
        : { prev: pos - 1, next: pos + 1 };    

    return index;
  }

  get prevTitle() {
    return this.menuLinks[this.index.prev];
  }

  get nextTitle() {
    return this.menuLinks[this.index.next];
  }

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

  events$ = new Subscription()

  constructor(
    private location: Location
  ) {
    this.theme = localStorage.getItem('data-theme') == 'dark' ? false : true;
  }

  ngOnInit() {
    this.url = this.location.path();

    this.events$.add(
      this.location.onUrlChange(val => {
        this.url = val;
      })
    );
  }

  ngOnDestroy() {
    this.events$.unsubscribe();
  }
}
