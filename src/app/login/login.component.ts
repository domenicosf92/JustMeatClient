import { Component, OnInit, Input } from '@angular/core';
import { User } from 'modules/userInterface';
import { AuthService } from '../auth.service';
import { LoginRule } from '../../../modules/loginInterface';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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


  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService) { }
  returnUrl: string;
  loginUser() {
    this.auth.loginUser(this.loggedUser).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.response);
        this.router.navigateByUrl(this.returnUrl);
      },
      err => {
        this.toastr.error('Invalid username or password');
        console.log(err);
      }
    );
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

}
