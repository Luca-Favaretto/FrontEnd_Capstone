import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/interface/task';
import { MatDialog } from '@angular/material/dialog';
import { FormEditTaskComponent } from '../dialog forms/form-edit-task/form-edit-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskSrv: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.taskSrv.getTasks().subscribe((res) => {
      this.tasks = res.content;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    task: Task
  ): void {
    const dialog = this.dialog.open(FormEditTaskComponent, {
      data: { task, dialog: this.dialog },
    });
    dialog.afterClosed().subscribe(() => {
      this.getTask();
    });
  }
}
