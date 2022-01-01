import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipe-resolver.service';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/recipes' },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', pathMatch: 'full', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: {recipe: RecipeResolverService} },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
