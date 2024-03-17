import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.scss'],
})
export class NavabarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }
  logout() {
    this.authSrv.logout();
    console.log('logout');
  }
}
