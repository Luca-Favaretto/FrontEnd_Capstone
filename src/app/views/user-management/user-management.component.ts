import { Component, OnInit } from '@angular/core';
import { Contract, User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { SliderRatingComponent } from 'src/app/components/dialog forms/slider-rating/slider-rating.component';
import { ContractFormComponent } from 'src/app/components/dialog forms/contract-form/contract-form.component';
import { TaskFormComponent } from 'src/app/components/dialog forms/task-add-form/task-form.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  constructor(private userSrv: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userSrv.getAll().subscribe((res) => {
      this.users = res.content;
      console.log(this.users);
    });
  }
  openDialogSlider(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    user: User
  ): void {
    const dialog = this.dialog.open(SliderRatingComponent, {
      data: { user, dialog: this.dialog },
    });
    dialog.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }
  openDialogContract(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    user: User
  ): void {
    const dialog = this.dialog.open(ContractFormComponent, {
      data: { user, dialog: this.dialog },
    });
    dialog.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }
  openDialogAddTask(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    user: User
  ): void {
    const dialog = this.dialog.open(TaskFormComponent, {
      data: { user, dialog: this.dialog },
    });
    dialog.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }
}
