import { Component, OnInit, Input } from '@angular/core';
import { User } from 'modules/userInterface';
import { AuthService } from '../auth.service';
import { LoginRule } from '../../../modules/loginInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() users: Array<User>;
  loggedUser: LoginRule = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  loginUser() {
    this.auth.loginUser(this.loggedUser).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.response);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

}
