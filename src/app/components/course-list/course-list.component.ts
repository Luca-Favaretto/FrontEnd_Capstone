import { Component, OnInit } from '@angular/core';
import { InternalCourse } from 'src/app/interface/internal-course';
import { InternalCourseService } from 'src/app/service/internal-course.service';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MyCourseComponent } from '../dialog forms/my-course/my-course.component';
import { AuthService } from 'src/app/service/auth.service';
import { AddCourseComponent } from '../dialog forms/add-course/add-course.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackService } from 'src/app/service/snack.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courses: InternalCourse[] = [];
  manager: boolean = false;

  constructor(
    private snackSrv: SnackService,
    private InternalCourseSrv: InternalCourseService,
    private userSrv: UserService,
    public dialog: MatDialog,
    private authSrv: AuthService
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.authSrv.user$.subscribe((user) => {
      if (user) {
        this.manager = user.roles.some((role) => 'MANAGER'.includes(role.role));
      }
    });
  }
  getAll() {
    this.InternalCourseSrv.getCourses().subscribe((res) => {
      this.courses = res.content;
    });
  }
  addMeCourses(idCourse: string): void {
    this.userSrv.addCourse(idCourse).subscribe(() => {
      this.snackSrv.openSnack('Course add');
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialog = this.dialog.open(MyCourseComponent, {
      data: { dialog: this.dialog },
    });
  }
  openDialogAdd(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialog = this.dialog.open(AddCourseComponent, {
      data: { dialog: this.dialog },
    });

    dialog.afterClosed().subscribe(() => {
      this.getAll();
    });
  }
}
