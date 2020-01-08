import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../../modules/userInterface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = {
    id: '',
    username: '',
    password: '',
    name: '',
    surname: '',
    address: '',
    phone: '',
    email: ''
  };

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams.id;
    this.user = await this.userService.getUserById(id);
  }

}
