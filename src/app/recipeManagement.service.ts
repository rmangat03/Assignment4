import { Injectable } from '@angular/core';
import { Recipe } from './Recipe.class';

@Injectable()
export class recipeManagement{

recipe: Recipe;

fetchSet(recipe){
  this.recipe = recipe;
}


set(): Recipe{
  return this.recipe;
}
}
