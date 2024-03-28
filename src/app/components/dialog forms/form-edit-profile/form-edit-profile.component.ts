import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/interface/user';
import { SnackService } from 'src/app/service/snack.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-form-edit-profile',
  templateUrl: './form-edit-profile.component.html',
  styleUrls: ['./form-edit-profile.component.scss'],
})
export class FormEditProfileComponent implements OnInit {
  me: User;
  dialog: MatDialog;
  constructor(
    private snackSrv: SnackService,
    private userSrv: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.me = data.user;
    this.dialog = data.dialog;
  }

  ngOnInit(): void {}

  updateMe(form: NgForm) {
    this.userSrv.updateMe(form.value).subscribe(() => {
      this.dialog.closeAll();
      this.snackSrv.openSnack('Profile Update');
    });
  }
}
