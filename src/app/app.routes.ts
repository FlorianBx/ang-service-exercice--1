import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'recipes-list/:id', component: RecipeDetailsComponent },
  { path: 'recipes-list', component: RecipeListComponent },
];
