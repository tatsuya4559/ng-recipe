import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  private id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params.id);
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name
      recipeDescription = recipe.description
      recipeImagePath = recipe.imagePath
      recipe.ingredients.forEach(ingredient => {
        recipeIngredients.push(
          this.createIngredientFormGroup(ingredient.name, ingredient.amount)
        )
      });
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.makeRecipeFromForm());
    } else {
      this.recipeService.addRecipe(this.makeRecipeFromForm());
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(this.createIngredientFormGroup(null, null));
  }

  createIngredientFormGroup(defaultName: string|null, defaultAmount: number|null) {
    return new FormGroup({
      name: new FormControl(defaultName, Validators.required),
      amount: new FormControl(defaultAmount, [Validators.required, Validators.min(1)]),
    });
  }

  get ingredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }

  makeRecipeFromForm() {
    console.log(this.recipeForm.value);
    const {name, description, imagePath, ingredients } = this.recipeForm.value;
    return new Recipe(name, description, imagePath,
                      ingredients.map(i => new Ingredient(i.name, i.amount)));
  }

  onCancel() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
