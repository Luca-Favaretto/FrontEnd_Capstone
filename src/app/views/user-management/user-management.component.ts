import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  constructor(private userSrv: UserService) {}

  ngOnInit(): void {
    this.userSrv.getAll().subscribe((res) => {
      this.users = res.content;
      console.log(this.users);
    });
  }
}
