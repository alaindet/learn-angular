import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../../../core/types';
import { PEARS } from '../../data/pears';

@Component({
  templateUrl: './details.component.html',
})
export class PearsDetailsComponent implements OnInit {

  item: Item;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    this.item = PEARS.find((item: Item) => item.id === id);
  }
}