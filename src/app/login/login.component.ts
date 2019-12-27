import { Component, OnInit, Input } from '@angular/core';
import { User } from 'modules/userInterface';
import { JwtService } from '../jwt.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() users: Array<User>;
  public email: string;
  public password: string;
  public accessToken: Observable<{access_token: string}>;

  constructor(private jwtService: JwtService) { }

  public onSubmit() {
    this.accessToken = this.jwtService.login(this.email, this.password);
  }

  ngOnInit() {
  }

}
