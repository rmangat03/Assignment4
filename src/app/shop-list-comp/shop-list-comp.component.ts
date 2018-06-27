import { Component, OnInit } from '@angular/core';
import { Fridge } from '../Fridge.class';
import { recipeManagement } from '../recipeManagement.service';
import { Recipe } from '../Recipe.class';

@Component({
  selector: 'app-shop-list-comp',
  templateUrl: './shop-list-comp.component.html',
  styleUrls: ['./shop-list-comp.component.css']
})
export class ShopListCompComponent implements OnInit {

  constructor(public service: recipeManagement) { }

    fridge: Fridge;
    list: string[][];

  ngOnInit() {
    this.fridge = new Fridge();
    this.fridge = null;
  }

  fetchRecipe(){
    alert("IN");
    alert(this.service.recipe[0].NAME);

}
}
