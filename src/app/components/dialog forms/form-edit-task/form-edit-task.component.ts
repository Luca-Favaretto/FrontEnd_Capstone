import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { Task } from 'src/app/interface/task';
@Component({
  selector: 'app-form-edit-task',
  templateUrl: './form-edit-task.component.html',
  styleUrls: ['./form-edit-task.component.scss'],
})
export class FormEditTaskComponent implements OnInit {
  task: Task;
  dialog: MatDialog;
  constructor(
    private userSrv: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.task = data.task;
    this.dialog = data.dialog;
  }

  ngOnInit(): void {}

  complateTask(idTask: string) {
    this.userSrv.complateTask(idTask).subscribe(() => {
      this.dialog.closeAll();
    });
  }
}
