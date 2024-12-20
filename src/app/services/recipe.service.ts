import { Injectable } from '@angular/core';
import { Recipe } from '../types/Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      description: 'Un plat italien classique avec une sauce riche en viande.',
      ingredients: [
        { id: 1, name: 'Spaghetti', quantity: 500, unit: 'g' },
        { id: 2, name: 'Bœuf haché', quantity: 300, unit: 'g' },
        { id: 3, name: 'Tomates pelées', quantity: 400, unit: 'g' },
        { id: 4, name: 'Oignon', quantity: 1, unit: 'pièce' },
        { id: 5, name: 'Ail', quantity: 2, unit: 'gousse' },
      ],
    },
    {
      id: 2,
      name: 'Curry de Poulet',
      description:
        'Un plat épicé et savoureux à base de poulet et de lait de coco.',
      ingredients: [
        { id: 1, name: 'Poulet', quantity: 500, unit: 'g' },
        { id: 2, name: 'Lait de coco', quantity: 400, unit: 'ml' },
        { id: 3, name: 'Curry en poudre', quantity: 2, unit: 'c. à soupe' },
        { id: 4, name: 'Oignon', quantity: 1, unit: 'pièce' },
        { id: 5, name: 'Ail', quantity: 3, unit: 'gousse' },
      ],
    },
    {
      id: 3,
      name: 'Salade César',
      description:
        'Une salade légère avec une sauce crémeuse et des croûtons croustillants.',
      ingredients: [
        { id: 1, name: 'Laitue romaine', quantity: 1, unit: 'pièce' },
        { id: 2, name: 'Filet de poulet', quantity: 200, unit: 'g' },
        { id: 3, name: 'Croûtons', quantity: 50, unit: 'g' },
        { id: 4, name: 'Parmesan râpé', quantity: 30, unit: 'g' },
        { id: 5, name: 'Sauce César', quantity: 100, unit: 'ml' },
      ],
    },
    {
      id: 4,
      name: 'Soupe de Lentilles',
      description:
        'Une soupe chaude et réconfortante avec des lentilles et des légumes.',
      ingredients: [
        { id: 1, name: 'Lentilles vertes', quantity: 200, unit: 'g' },
        { id: 2, name: 'Carotte', quantity: 2, unit: 'pièce' },
        { id: 3, name: 'Céleri', quantity: 2, unit: 'tige' },
        { id: 4, name: 'Oignon', quantity: 1, unit: 'pièce' },
        { id: 5, name: 'Bouillon de légumes', quantity: 1, unit: 'L' },
      ],
    },
    {
      id: 5,
      name: 'Pancakes',
      description:
        'De délicieux pancakes moelleux parfaits pour le petit déjeuner.',
      ingredients: [
        { id: 1, name: 'Farine', quantity: 200, unit: 'g' },
        { id: 2, name: 'Lait', quantity: 300, unit: 'ml' },
        { id: 3, name: 'Oeufs', quantity: 2, unit: 'pièce' },
        { id: 4, name: 'Sucre', quantity: 30, unit: 'g' },
        { id: 5, name: 'Beurre', quantity: 50, unit: 'g' },
      ],
    },
  ];
}
