import { Component, OnInit } from '@angular/core';
import { Fridge } from '../Fridge.class';
import { recipeManagement } from '../recipeManagement.service';
import { Recipe } from '../Recipe.class';
import { Item } from '../Item.class';

@Component({
  selector: 'app-shop-list-comp',
  templateUrl: './shop-list-comp.component.html',
  styleUrls: ['./shop-list-comp.component.css'],
  providers: [recipeManagement]
})
export class ShopListCompComponent implements OnInit {

  constructor(private service: recipeManagement) { }

    fridge: Fridge;
    list: string[][];

  ngOnInit() {
    this.fridge = new Fridge();
    this.fridge = null;
  }

  fetchRecipe(){

}
