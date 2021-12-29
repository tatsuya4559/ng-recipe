import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test recipe.',
      'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/04/cb/T-T-14316-Chilli-Recipe-Cards.webp',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Tomato', 2),
      ]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a test recipe.',
      'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/04/cb/T-T-14316-Chilli-Recipe-Cards.webp',
      [],
    ),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
