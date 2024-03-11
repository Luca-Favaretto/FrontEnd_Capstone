import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: TaskData[] = [];

  constructor(private taskSrv: TaskService) {}

  ngOnInit(): void {
    this.taskSrv.getTask().subscribe((res) => {
      console.log(res);
    });
  }
}
