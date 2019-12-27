import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from 'modules/userInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JustMeatClient';
  usersList: Array<User>;

  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.usersList = await this.usersService.getUsers();
  }
}
