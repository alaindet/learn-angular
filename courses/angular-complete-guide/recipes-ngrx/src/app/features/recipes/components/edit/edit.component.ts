import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';

import { RecipeService } from '../../services';
import { finalize } from 'rxjs';

@Component({
  templateUrl: './edit.component.html',
})
export class RecipeEditComponent implements OnInit {

  name: string;
  editMode = false;
  isLoading = false;
  recipeForm: FormGroup;

  get ingredientsControls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.name = params?.name;
      this.editMode = !!params?.name;
      this.initForm();
    });
  }

  onSubmit(): void {

    const recipe = this.recipeForm.value;

    const request = this.editMode
      ? this.recipeService.updateRecipe(recipe)
      : this.recipeService.createRecipe(recipe);

    request
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        error: err => {
          console.error(err);
        },
        next: data => {
          console.log('data', data)
          this.router.navigate(['/recipes', encodeURI(recipe.name)]);
        },
      });
  }

  onAddIngredient(): void {
    const amountValidator = Validators.pattern(/^[1-9]+[0-9]*$/);
    const control = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, amountValidator]),
    });
    const controls = this.recipeForm.get('ingredients') as FormArray;
    controls.push(control);
  }

  onDeleteIngredient(index: number): void {
    const controls = this.recipeForm.get('ingredients') as FormArray;
    controls.removeAt(index);
  }

  onCancel(): void {
    this.editMode
      ? this.router.navigate(['/recipes', this.name])
      : this.router.navigate(['/recipes']);
  }

  private initForm(): void {
    this.isLoading = true;

    this.recipeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      ingredients: new FormArray([]),
    });

    if (!this.editMode) {
      this.isLoading = false;
      return;
    }

    this.recipeService.getRecipe(this.name)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(recipe => {

        this.recipeForm.patchValue({
          name: recipe.name,
          imagePath: recipe.imagePath,
          description: recipe.description,
        });

        if (!recipe?.ingredients) {
          return;
        }

        const controls = this.recipeForm.get('ingredients') as FormArray;
        for (const ingredient of recipe.ingredients) {
          controls.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ]),
          }));
        }
      });
  }
}
