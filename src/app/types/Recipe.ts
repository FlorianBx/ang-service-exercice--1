export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredients[];
}

interface Ingredients {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

