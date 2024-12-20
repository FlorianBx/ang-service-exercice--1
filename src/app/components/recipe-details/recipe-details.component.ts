import { Component, inject } from '@angular/core';
import { Recipe } from '../../types/Recipe';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  private recipeService = inject(RecipeService);
  private activatedRoute = inject(ActivatedRoute);
  recipes: any;
  recipe: any;
  id: number = 2;

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.id)
    this.recipe = this.recipes[this.id - 1];
  }
}
