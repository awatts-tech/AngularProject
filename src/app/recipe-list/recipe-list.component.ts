import { Component, OnInit } from '@angular/core';
import { RecipesApiService } from '../recipes-api.service';

interface Recipe {
  // insert data wanted from the API here	
  //title	
  //thumbnail	
  //link	
  //short description?	
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeAPI: RecipesApiService) { }

  favorite(recipe: Recipe) {
    // console.log("the recipe is", recipe);
    this.recipeAPI.favorites.push(recipe);
    // console.log("the favorties are", this.recipeAPI.favorites);
  }

  glutenFree: boolean = false;
  dairyFree: boolean = false;
  peanutFree: boolean = false;
  vegetarian: boolean = false;
  vegan: boolean = false;
  keto: boolean = false;
  kosher: boolean = false;
  porkFree: boolean = false;

  activateFilter() {
    this.recipeAPI.getRecipesFiltered(this.glutenFree, this.dairyFree, this.peanutFree,
    this.vegetarian, this.vegan, this.keto, this.kosher, this.porkFree);
    console.log("the filtering call works")
    //remove recipes from array that dont meet filter criteria - but how?!
    // if this.recipeAPI.recipes.healthLabel = !this.peanutFree{
    //   this.recipeAPI.recipes.splice();
    // }
  }

  ngOnInit(): void {
    this.recipeAPI.getRecipes();
  }
}
