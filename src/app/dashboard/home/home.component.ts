import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService],
})
export class HomeComponent implements OnInit {
  public posts = [];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getPost().subscribe((data) => {
      // this.posts = data;
      this.posts = data;
      console.log(this.posts);
    });
  }
}
