import { Injectable } from '@angular/core';
import { Recipe } from './Recipe.class';
import { Item } from './Item.class';
import { Fridge } from './Fridge.class';

@Injectable()
export class recipeManagement{

public recipe: Array<Recipe> = new Array<Recipe>();
selectedRecipe: Recipe = null;
selectedIngrident: Item = null;
selectedQuantity: Item = null;
selectedInstruction: string = null
fridgeItems: Array<Item>;
fridge: Fridge = new Fridge();
list: string[][] = [[],[]];

selectRecipe(recipeSelected){
  this.selectedRecipe = recipeSelected;
  this.checkRecipe();
}
selectIngrident(item){
  this.selectedIngrident = item;
}
selectQuantity(item){
  this.selectedQuantity = item;
}
selectInstruction(ing){
  this.selectedInstruction = ing;
}
addItemsToFridge(item){
  this.fridgeItems = item;
  this.fridge.CONTENTS = this.fridgeItems;
}
checkRecipe(){
  this.list = this.fridge.checkRecipe(this.selectedRecipe);
}
}
