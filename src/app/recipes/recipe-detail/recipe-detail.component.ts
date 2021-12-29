import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private slService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipe = this.recipeService.getRecipe(params.id);
    });
  }

  addToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }

}
