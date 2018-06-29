import { Component, OnInit } from '@angular/core';
import { recipeManagement } from '../recipeManagement.service';
import { Recipe } from '../Recipe.class';

@Component({
  selector: 'app-shop-list-comp',
  templateUrl: './shop-list-comp.component.html',
  styleUrls: ['./shop-list-comp.component.css']
})
export class ShopListCompComponent implements OnInit {

  constructor(private service: recipeManagement) { }


  ngOnInit() {
  }

}
