import { Component } from '@angular/core';

import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '武豊', message: 'お疲れ様です！' },
  { name: '武豊', message: 'この間の件ですが、どうなりましたか？' },
  { name: '福永祐一', message: 'お疲れ様です！' },
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  comments = COMMENTS;
}
