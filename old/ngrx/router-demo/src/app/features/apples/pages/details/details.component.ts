import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../../../core/types';
import { APPLES } from '../../data/apples';

@Component({
  templateUrl: './details.component.html',
})
export class ApplesDetailsComponent implements OnInit {

  item: Item;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    this.item = APPLES.find((item: Item) => item.id === id);
  }
}