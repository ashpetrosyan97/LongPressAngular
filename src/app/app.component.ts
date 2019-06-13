import {Component} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  openMenu(viewChild: MatMenuTrigger) {
    viewChild.openMenu();
  }

  view() {
    console.log('Clicked');
  }
}
