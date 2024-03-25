import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { InternalCourseService } from 'src/app/service/internal-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  dialog: MatDialog;
  constructor(
    private courseSrv: InternalCourseService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialog = data.dialog;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  postCourse(form: NgForm) {
    this.courseSrv.postCourse(form.value).subscribe(() => {
      this.dialog.closeAll();
    });
  }
}
