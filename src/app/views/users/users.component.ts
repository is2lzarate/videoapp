import {Component, OnInit} from '@angular/core';
import { freeSet } from '@coreui/icons';

import { UserBasic } from '../../domain/users/userBasic';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  users: UserBasic[] = [];

  ngOnInit(): void {
    this.users.push(new UserBasic(1, 'John', 'Doe', 'Perez', 'Diaz', 'pd@gmail.com', 'pdiaz'));
    this.users.push(new UserBasic(2, 'David', 'Andres', 'Gonzales', 'Nin', 'dagonzales@gmail.com', 'dagonzales'));
  }

}
