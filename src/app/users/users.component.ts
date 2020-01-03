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

  constructor(private usersService: UsersService) { }

  public async deleteUser(id: any) {
    await this.usersService.deleteUser(id);
  }

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
  }

}
