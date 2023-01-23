import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feisbuc-A';

  ListaPost : Post[] = []
  invia(nome : HTMLInputElement, cont : HTMLInputElement){
    this.ListaPost.push(new Post(nome.value,cont.value))
  }
}
