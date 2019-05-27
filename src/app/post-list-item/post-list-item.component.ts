import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title : string;
  @Input() content : string;
  created_at : Date;
  loveIts : number;

  constructor() {
    this.loveIts = 0;
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  onUpVote() {
    this.loveIts += 1;
  }
  onDownVote() {
    this.loveIts -= 1;
  }
}
