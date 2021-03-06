import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit(): void {
    this.ingredients  = this.shoppingListService.getIngredients();
    this.ingredientChangeSub = this.shoppingListService.ingredientsChanged.subscribe(ingredients => this.ingredients = ingredients);
  }

  ngOnDestroy(): void {
    this.ingredientChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
