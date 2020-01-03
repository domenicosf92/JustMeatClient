import { Component, OnInit } from '@angular/core';
import { User } from 'modules/userInterface';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  userId: string;

  constructor(private usersService: UsersService) { }

  public async deleteUser() {
    await this.usersService.deleteUser(this.userId);
  }

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
  }

}
