import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [AuthService],
})
export class SearchComponent implements OnInit {
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
