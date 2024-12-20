import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../types/Recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  private recipeService = inject(RecipeService);

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
    console.log(this.recipes[1])
  }
}
