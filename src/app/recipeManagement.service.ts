import { Injectable } from '@angular/core';
import { Recipe } from './Recipe.class';

@Injectable()
export class recipeManagement{

recipe: Recipe[] = [];
selectedRecipe = null;

addRecipe(recipe){
  this.recipe = recipe;
}
selectRecipe(recipe){
  this.selectedRecipe = recipe;
  alert(this.selectedRecipe);
}





/*fetchSet(recipe){
  this.recipe = recipe;
}


set(): Recipe{
  return this.recipe;
}*/
}
