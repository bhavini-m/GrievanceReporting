import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../dashboard/posts';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3000/api/grievances';
  constructor(private http: HttpClient) {}

  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else false;
  }
  signIn(email, password) {
    return this.http.post(this.baseUrl, { email, password });
  }
  getPost(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseUrl);
  }

  submitPost(post) {
    return this.http.post(this.baseUrl, post);
  }
}
