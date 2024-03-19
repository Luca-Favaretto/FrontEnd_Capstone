import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private authSrv: AuthService, private userSrv: UserService) {}

  ngOnInit(): void {
    this.authSrv.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
    this.userSrv.getMe().subscribe((resp) => {
      this.avatar = resp.avatar;
    });
  }
  logout() {
    this.authSrv.logout();
    console.log('logout');
  }
}
