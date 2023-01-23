import { Component, Input} from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() commento! : string 
 
}
