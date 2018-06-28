import { Component, OnInit } from '@angular/core';
import { recipeManagement } from '../recipeManagement.service';
import { Recipe } from '../Recipe.class';

@Component({
  selector: 'app-shop-list-comp',
  templateUrl: './shop-list-comp.component.html',
  styleUrls: ['./shop-list-comp.component.css']
})
export class ShopListCompComponent implements OnInit {

  constructor(public service: recipeManagement) { }

    list: string[][] = [[],[]];

  ngOnInit() {
  }

  fetchRecipe(){
    this.list = this.service.checkRecipe();
    for(let a of this.list){
      for(let b of a){
        console.log(b);
      }
      console.log("-----------");
    }
}
}
