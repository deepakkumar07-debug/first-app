import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//whenever angular sees elements like that
  templateUrl: './app.component.html',// now our template is external it gonna render this template from this path
  styleUrls: ['./app.component.css']//also render css from this path
})
export class AppComponent {
  title = 'first-app';
}
