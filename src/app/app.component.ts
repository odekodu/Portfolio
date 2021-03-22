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
  showMenu= false;
}
