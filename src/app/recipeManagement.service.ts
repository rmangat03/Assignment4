import { Injectable } from '@angular/core';
import { Recipe } from './Recipe.class';

@Injectable()
export class recipeManagement{

public recipe: Array<Recipe>;
public selectedRecipe = null;

addRecipe(recipe){
  this.recipe = recipe;

}
selectRecipe(recipe){
  this.selectedRecipe = recipe;
}





/*fetchSet(recipe){
  this.recipe = recipe;
}


set(): Recipe{
  return this.recipe;
}*/
}
