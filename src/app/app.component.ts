import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding4';
  detailsArray = [
    { id: 1, name: 'Detail 1', description: 'Description for Detail 1' },
    { id: 2, name: 'Detail 2', description: 'Description for Detail 2' },
    { id: 3, name: 'Detail 3', description: 'Description for Detail 3' },
    // ... more details
  ];
}
