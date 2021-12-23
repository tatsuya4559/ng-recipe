import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe.', 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/04/cb/T-T-14316-Chilli-Recipe-Cards.webp'),
    new Recipe('Another Test Recipe', 'This is a test recipe.', 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/04/cb/T-T-14316-Chilli-Recipe-Cards.webp'),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
