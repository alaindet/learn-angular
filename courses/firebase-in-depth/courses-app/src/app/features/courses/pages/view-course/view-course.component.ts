import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services';

@Component({
  selector: 'app-page-view-course',
  standalone: true,
  templateUrl: './view-course.component.html',
})
export class ViewCoursePageComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private coursesService = inject(CoursesService);

  id = this.route.snapshot.params['id'];

  ngOnInit() {
    this.coursesService.getCourse(this.id).subscribe({
      error: err => console.error(err),
      next: course => console.log('Course', course),
    });
  }
}
