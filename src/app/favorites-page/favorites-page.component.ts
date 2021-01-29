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
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  constructor(public recipeAPI: RecipesApiService) { }

  removeFavorite(recipe: number) {
    // console.log("the recipe is", recipe);
    this.recipeAPI.favorites.splice(recipe, 1);
    // console.log("the favorties are", this.recipeAPI.favorites);
  }

  ngOnInit(): void {
  }

}
