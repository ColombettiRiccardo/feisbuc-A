import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post! : Post


  commenta(c : HTMLInputElement){
    this.post.commento.push(c.value)
  }
  addLike(){
    this.post.like ++
  }
}
