import { Component, OnInit } from '@angular/core';
import { InternalCourse } from 'src/app/interface/internal-course';
import { InternalCourseService } from 'src/app/service/internal-course.service';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MyCourseComponent } from '../dialog forms/my-course/my-course.component';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courses: InternalCourse[] = [];

  constructor(
    private InternalCourseSrv: InternalCourseService,
    private userSrv: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.InternalCourseSrv.getCourses().subscribe((res) => {
      this.courses = res.content;
      console.log(this.courses);
    });
  }
  addMeCourses(idCourse: string): void {
    this.userSrv.addCourse(idCourse).subscribe();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialog = this.dialog.open(MyCourseComponent, {
      data: { dialog: this.dialog },
    });
  }
}
