import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService],
})
export class SigninComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['./dashboard']);
    }
  }

  onSubmit() {
    const { email, password } = this.signInForm.value;

    try {
      this.authService.signIn(email, password).subscribe((res) => {
        if (res) {
          console.log('hrere');

          localStorage.setItem('token', res['token']);
          this.router.navigate(['./dashboard']);
          return true;
        }

        console.log('lol');
        return false;
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  ngOnInit(): void {}
}
