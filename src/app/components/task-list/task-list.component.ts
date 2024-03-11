import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskSrv: TaskService) {}

  ngOnInit(): void {
    this.taskSrv.getTask().subscribe((res) => {
      this.tasks = res.content;
    });
  }
}
