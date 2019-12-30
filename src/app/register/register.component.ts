import { Component, OnInit } from '@angular/core';
import { NewUser } from '../../../modules/userInterface';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerUserData: NewUser = {
    username: '',
    password: '',
    name: '',
    surname: '',
    address: '',
    phone: '',
    email: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {}

  registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.response);
        this.router.navigate(['/login']);
      },
      err => console.log(err)
    );
  }

}
