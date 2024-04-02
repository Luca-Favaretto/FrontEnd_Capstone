import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { Task } from 'src/app/interface/task';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SnackService } from 'src/app/service/snack.service';
import { ResultService } from 'src/app/service/result.service';
@Component({
  selector: 'app-form-edit-task',
  templateUrl: './form-edit-task.component.html',
  styleUrls: ['./form-edit-task.component.scss'],
})
export class FormEditTaskComponent implements OnInit {
  task: Task;
  dialog: MatDialog;

  constructor(
    private resultSrv: ResultService,
    private snackSrv: SnackService,
    private userSrv: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.task = data.task;
    this.dialog = data.dialog;
  }

  ngOnInit(): void {}

  complateTask(idTask: string) {
    this.userSrv.complateTask(idTask).subscribe((res) => {
      this.resultSrv.updateSharedData(res);
      this.dialog.closeAll();
      this.snackSrv.openSnack('Task complate');
    });
  }
}
