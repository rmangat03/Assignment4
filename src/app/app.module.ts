import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeCompComponent } from './recipe-comp/recipe-comp.component';
import { FridgeCompComponent } from './fridge-comp/fridge-comp.component';
import { ShopListCompComponent } from './shop-list-comp/shop-list-comp.component';
import { recipeManagement } from './recipeManagement.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCompComponent,
    FridgeCompComponent,
    ShopListCompComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [recipeManagement],
  bootstrap: [AppComponent]
})
export class AppModule { }
