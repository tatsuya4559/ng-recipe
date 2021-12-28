import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe.', 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/04/cb/T-T-14316-Chilli-Recipe-Cards.webp'),
    new Recipe('Another Test Recipe', 'This is a test recipe.', 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/04/cb/T-T-14316-Chilli-Recipe-Cards.webp'),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
