import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.scss'],
})
export class NavabarComponent implements OnInit {
  isLoggedIn: boolean = false;
  avatar!: string;
  manager!: boolean;

  constructor(private authSrv: AuthService, private userSrv: UserService) {}

  ngOnInit(): void {
    this.authSrv.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });

    this.authSrv.user$.subscribe((user) => {
      if (user) {
        this.avatar = user.avatar;
        this.manager = user.roles.some((role) => 'MANAGER'.includes(role.role));
      }
    });
  }

  logout() {
    this.authSrv.logout();
  }
}
