import { Component, OnInit } from '@angular/core';
import { Fridge } from '../Fridge.class';
import { Item } from '../Item.class';
import { recipeManagement } from '../recipeManagement.service';
@Component({
  selector: 'app-fridge-comp',
  templateUrl: './fridge-comp.component.html',
  styleUrls: ['./fridge-comp.component.css']
})
export class FridgeCompComponent implements OnInit {

  fridge: Fridge;
  itemToAddDelete: string = "";
  quantityToAddDelete: number = -1;
  fridgeItems: Array<Item> = new Array<Item>();
  letter = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

  constructor(private service:recipeManagement) { }

  ngOnInit() {
    this.fridge = new Fridge();
    this.showFridgeItems();
  }

  addItems(){
    if(this.itemToAddDelete.match(this.letter) !== null && this.quantityToAddDelete > 0){
    this.fridge.add(new Item(this.itemToAddDelete, this.quantityToAddDelete));
    this.showFridgeItems();
  }
    this.service.addItemsToFridge(this.fridgeItems);
  }

  deleteItem(){
    this.fridge.remove(new Item(this.itemToAddDelete, this.quantityToAddDelete))
    this.showFridgeItems();
    this.service.addItemsToFridge(this.fridgeItems);

  }

  showFridgeItems(){
    this.fridgeItems = this.fridge.CONTENTS;
  }

}
