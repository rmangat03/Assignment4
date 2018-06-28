import { Injectable } from '@angular/core';
import { Recipe } from './Recipe.class';
import { Item } from './Item.class';
import { Fridge } from './Fridge.class';


@Injectable()
export class recipeManagement{

public recipe: Array<Recipe>;
selectedRecipe: Recipe = null;
fridgeItems: Array<Item>;
list: string[][];
fridge: Fridge = new Fridge();

addRecipe(recipe){
  this.recipe = recipe;

}
selectRecipe(recipe){
  this.selectedRecipe = recipe;
}
addItemsToFridge(item){
  this.fridgeItems = item;
  this.fridge.CONTENTS = this.fridgeItems;
}
checkRecipe(): string[][]{
  if(this.selectedRecipe == null){
    alert("Please select one recipe");
    return;
  }
  return this.fridge.checkRecipe(this.selectedRecipe)
}
}
