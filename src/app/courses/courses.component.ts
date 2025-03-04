import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course';
import { CourseComponent } from '../course/course.component';



@Component({
  selector: 'app-courses',
  imports: [CourseComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses !: Course[];

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

}
