import { Component, OnInit } from '@angular/core';
import { RecipesApiService } from '../recipes-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(public recipeAPI: RecipesApiService) { }

  ngOnInit(): void {
    this.recipeAPI.getRecipes();
  }

  

}
