import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FrontEnd_Capstone';
  constructor(private authSrv: AuthService) {}
  ngOnInit(): void {
    this.authSrv.verifyLogin();
  }
}
