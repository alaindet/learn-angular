import { Component, Input } from '@angular/core';

import { Recipe } from '@/shared/types';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
}
