import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = parseInt(this.amountInputRef.nativeElement.value);
    const ingredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(ingredient);
  }

}
