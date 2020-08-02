import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { TrainingService } from './../../services/training.service';
import { Exercise } from './../../models/exercise.model';

@Component({
  selector: 'app-training-past',
  templateUrl: './training-past.component.html',
  styleUrls: ['./training-past.component.scss']
})
export class TrainingPastPageComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort) sortRef: MatSort;
  @ViewChild(MatPaginator) paginatorRef: MatPaginator;

  dataSource = new MatTableDataSource<Exercise>();
  displayedColumns: string[] = [
    'date',
    'name',
    'calories',
    'duration',
    'state',
  ];


  private subs: { [sub: string]: Subscription } = {};

  constructor(
    private trainingService: TrainingService,
  ) {}

  ngOnInit() {
    this.subs.pastExercises = this.trainingService.getPastExercises()
      .subscribe(
        (exercises: Exercise[]) => {
          this.dataSource.data = exercises;
        }
      );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sortRef;
    this.dataSource.paginator = this.paginatorRef;
  }

  ngOnDestroy() {
    for (const sub in this.subs) {
      this.subs[sub].unsubscribe();
    }
  }

  onFilterData(text: string) {
    this.dataSource.filter = text.trim().toLowerCase();
  }
}
