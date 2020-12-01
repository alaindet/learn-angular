import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomValidators } from 'src/app/shared/custom-validators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  id: number;
  isEditing = false;
  recipe: Recipe;

  recipeForm: FormGroup;
  recipeFormIngredients = new FormArray([]);

  paramsSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscribeToRouteParameters();
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

  private subscribeToRouteParameters(): void {
    this.paramsSub = this.route.params.subscribe(
      (params: Params) => {
        if (params.id) { // Editing...
          this.isEditing = true;
          this.id = +params.id;
          this.recipe = this.recipesService.getRecipe(this.id);
        } else { // Creating...
          this.isEditing = false;
        }
      }
    );
  }

  private buildForm(): void {

    let recipe;

    if (this.isEditing) {
      recipe = this.recipe;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          this.recipeFormIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    } else {
      recipe = {
        name: '',
        imagePath: '',
        description: '',
        ingredients: []
      };
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe.name, Validators.required),
      'imagePath': new FormControl(
        recipe.imagePath,
        [
          Validators.required,
          CustomValidators.isUrl
        ]
      ),
      'description': new FormControl(recipe.description, Validators.required),
      'ingredients': this.recipeFormIngredients
    });
  }

  public getIngredientsControls(): any {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    return ingredients.controls;
  }

  private navigateAway(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.recipesService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipesService.addRecipe(this.recipeForm.value);
    }
    this.navigateAway();
  }

  onAddIngredient(): void {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number): void {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.removeAt(index);
  }

  onDeleteRecipe(): void {
    this.recipesService.deleteRecipe(this.id);
    this.navigateAway();
  }

  onClearRecipeForm(): void {
    this.navigateAway();
  }

}
