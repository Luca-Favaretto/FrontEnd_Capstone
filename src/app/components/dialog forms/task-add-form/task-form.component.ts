import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PageResponse } from 'src/app/interface/page-response';
import { User } from 'src/app/interface/user';
import { TaskService } from 'src/app/service/task.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  user: User;
  dialog: MatDialog;
  tasks: Task[] = [];

  constructor(
    private userSrv: UserService,
    private taskSrv: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data.user;
    this.dialog = data.dialog;
  }

  ngOnInit(): void {}
  getTaskUser() {
    this.taskSrv.getUserTasks(this.user.id).subscribe((resp) => {
      this.tasks = resp.content;
    });
  }
  postTask(form: NgForm) {
    this.taskSrv.postTask(this.user.id, form.value).subscribe((resp) => {
      this.tasks = resp.content;
    });
  }
}
