import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserComponent],
})
export class AppComponent {
  title = 'myapp';
  money = 500;
  value = 10;
  birthday = new Date(1998, 3, 15);
}
