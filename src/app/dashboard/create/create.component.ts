import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [AuthService],
})
export class CreateComponent implements OnInit {
  constructor(private authService: AuthService) {}

  createNewForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    contact: new FormControl(''),
    description: new FormControl(''),
    file: new FormControl(''),
    category: new FormControl(),
  });

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.createNewForm.value);
    this.authService.submitPost(this.createNewForm.value).subscribe((data) => {
      console.log(data);
      alert('Griveance was submiited Successfully');
      this.createNewForm.reset();
    });
  }
}
