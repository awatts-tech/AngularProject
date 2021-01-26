import { Component, Input, OnInit } from '@angular/core';
import {RecipesApiService} from '../recipes-api.service';

interface Recipe{
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
//recipe: Recipe;
  constructor(public recipesAPI: RecipesApiService) { }

  ngOnInit(): void {
    this.recipesAPI.getRecipes();
  }

}
