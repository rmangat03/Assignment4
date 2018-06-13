import { Component, OnInit } from '@angular/core';
import { Fridge } from '../Fridge.class';
import { recipeManagement } from '../recipeManagement.service';

@Component({
  selector: 'app-shop-list-comp',
  templateUrl: './shop-list-comp.component.html',
  styleUrls: ['./shop-list-comp.component.css']
})
export class ShopListCompComponent implements OnInit {

  constructor() { }

    fridge: Fridge;
    list: string[][];

  ngOnInit() {
    this.fridge = new Fridge();
  }

  fetchList(){
    this.list = this.fridge.checkRecipe(new recipeManagement().set());
  }

}
