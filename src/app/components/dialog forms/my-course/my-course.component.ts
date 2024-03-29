import { Component, Inject, OnInit } from '@angular/core';
import { InternalCourse } from 'src/app/interface/internal-course';
import { InternalCourseService } from 'src/app/service/internal-course.service';
import { UserService } from 'src/app/service/user.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SnackService } from 'src/app/service/snack.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss'],
})
export class MyCourseComponent implements OnInit {
  courses!: InternalCourse[];
  dialog: MatDialog;

  constructor(
    private snackSrv: SnackService,
    private userSrv: UserService,
    private InternalCourseSrv: InternalCourseService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialog = data.dialog;
  }

  ngOnInit(): void {
    this.InternalCourseSrv.getMyCourse().subscribe((res) => {
      this.courses = res.content;
    });
  }
  complateCourses(idCourse: string): void {
    this.userSrv.complateCourse(idCourse).subscribe(() => {
      this.dialog.closeAll();
      this.snackSrv.openSnack('Complate');
    });
  }
}
