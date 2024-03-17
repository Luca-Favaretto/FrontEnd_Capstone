import { Component, OnInit } from '@angular/core';
import { InternalCourse } from 'src/app/interface/internal-course';
import { InternalCourseService } from 'src/app/service/internal-course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courses: InternalCourse[] = [];

  constructor(private InternalCourseSrv: InternalCourseService) {}

  ngOnInit(): void {
    this.InternalCourseSrv.getCourses().subscribe((res) => {
      this.courses = res.content;
      console.log(this.courses);
    });
  }
}
