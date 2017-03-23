import { Component } from '@angular/core';

import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Font Awesome works!';
  icon: string = 'thumbs-up';

  tooltipText: string = 'Click to show a Toast';

  buttonClick() {
    toast("...and Materialize works as well!", 5000);
  }
}
