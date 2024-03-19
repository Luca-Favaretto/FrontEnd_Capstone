import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditProfileComponent } from 'src/app/components/dialog forms/form-edit-profile/form-edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  me!: User;
  constructor(private userSrv: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getMe();
  }
  getMe() {
    this.userSrv.getMe().subscribe((res) => {
      this.me = res;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialog = this.dialog.open(FormEditProfileComponent, {
      data: { user: this.me, dialog: this.dialog },
    });
    dialog.afterClosed().subscribe(() => {
      this.getMe();
    });
  }
}
