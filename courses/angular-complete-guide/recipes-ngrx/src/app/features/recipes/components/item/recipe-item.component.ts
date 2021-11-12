import { Component, Input } from '@angular/core';

import { Recipe } from '../../types';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
}
