import { Component, OnInit } from '@angular/core';
import {Recipe} from "../Recipe.class";
import {Item} from "../Item.class";
import { recipeManagement } from '../recipeManagement.service';

@Component({
  selector: 'recipe-comp',
  templateUrl: './recipe-comp.component.html',
  styleUrls: ['./recipe-comp.component.css']
})
export class RecipeCompComponent implements OnInit {
  userRecipeNameInput: string = "";
  addOrDeleteIng: string = "";
  quantityIng: number = 0;
  userSelectedIng: string;
  inst: string = "";
  letter = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

  constructor(private service: recipeManagement) { }

  ngOnInit() {
    let recipe1 =new Recipe();
    recipe1.setName("mango pie");
    recipe1.addItem(new Item("mango",9));
    recipe1.addInstruction("Peel it. shake and mix it and enjoy");
    this.service.recipe.push(recipe1);
  }

  addRecipe(){
    for(let recipe of this.service.recipe){
    if(recipe.NAME == this.userRecipeNameInput && this.addOrDeleteIng.match(this.letter) != null && this.quantityIng > 0 && this.userRecipeNameInput.match(this.letter) !== null){

      this.service.selectedQuantity = null;
      this.service.selectedIngrident = null;

      recipe.addItem(new Item(this.addOrDeleteIng, this.quantityIng));


      return;
  }
  }
  if((this.addOrDeleteIng.match(this.letter) != null && this.quantityIng > 0) || this.service.recipe.length == 0){
    this.service.selectedQuantity = null;
    this.service.selectedIngrident = null;
    this.service.selectedRecipe = null;
    this.service.selectedInstruction = null;




    let recipeO = new Recipe();
    recipeO.setName(this.userRecipeNameInput);
    recipeO.addItem(new Item(this.addOrDeleteIng, this.quantityIng));
    recipeO.addInstruction(this.inst);
    this.service.recipe.push(recipeO);

  }
  }

  deleteRecipe(){
    if(this.service.selectedRecipe !== null){
    for(let recipe of this.service.recipe){
      if(recipe.NAME === this.service.selectedRecipe.NAME){
        this.service.recipe.splice(this.service.recipe.indexOf(recipe),1);
      }
    }
    }

  }


  selectRecipe(selected){
    this.service.selectRecipe(selected);
  }

  selectIng(item){
    this.service.selectIngrident(item);
  }

  selectQuantity(item){
    this.service.selectQuantity(item);
  }

  selectInstruction(inst){
    this.service.selectInstruction(inst);
  }


  editRecipe(){
    let check = false;
    for(let recipe of this.service.recipe){
      if(this.service.selectedRecipe != null && recipe.NAME === this.service.selectedRecipe.NAME && this.userRecipeNameInput.match(this.letter) !== null){
        for(let recipeCheck of this.service.recipe){
          if(recipeCheck.NAME === this.userRecipeNameInput){
            check = true;
          }
      }
      if(!check){
        recipe.NAME = this.userRecipeNameInput;
        check = false;
      }
    }
      if(recipe.INSTRUCTIONS[0] === this.service.selectedInstruction && this.inst != ""){
        recipe.INSTRUCTIONS[0] = this.inst;
      }
      alert("IN");
      for(let recipeIng of recipe.INGRIDENTS){

        if(this.service.selectedIngrident != null && recipeIng.name === this.service.selectedIngrident.name && this.addOrDeleteIng.match(this.letter) != null){
          recipeIng.name = this.addOrDeleteIng;
        }
        if(this.service.selectedQuantity!= null && recipeIng === this.service.selectedQuantity && this.quantityIng > 0){
          recipeIng.quantity = this.quantityIng;
        }
    }

  }
    this.service.selectedQuantity = null;
    this.service.selectedIngrident = null;
    this.service.selectedRecipe = null;
    this.service.selectedInstruction = null;


}
}
