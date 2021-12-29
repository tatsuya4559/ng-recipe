import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private selectedRecipeSub: Subscription;

  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.selectedRecipeSub = this.recipeService.recipeSelected.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    })
  }

  ngOnDestroy(): void {
    this.selectedRecipeSub.unsubscribe();
  }

}
