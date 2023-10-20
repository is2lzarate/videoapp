import {Component, OnInit} from '@angular/core';

import { UserBasicModel } from '../../domain/users/userBasic.model';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  users: UserBasicModel[] = [];

  constructor(private userServices: UsersService) {}

  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe(
      (data: UserBasicModel[]) => {
        this.users = data;
        console.log(this.users);
      }, error => {
        console.error(error);
      }
    );
  }
}
