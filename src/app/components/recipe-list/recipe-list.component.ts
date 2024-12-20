import { Component, inject } from '@angular/core';
import { Recipe } from '../../types/Recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  private recipeService = inject(RecipeService);

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }
}
