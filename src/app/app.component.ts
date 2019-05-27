import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  posts : Array<object> = [
    {
      title : "Titre A",
      content : "Content A",
      loveIts: 15,
      created_at: new Date()
    },
    {
      title : "Titre B",
      content : "Content B",
      loveIts: -20,
      created_at: new Date()
    },
    {
      title : "Titre C",
      content : "Content C",
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
