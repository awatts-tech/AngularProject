import { Component, OnInit } from '@angular/core';
import {RecipesApiService} from '../recipes-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipesAPI: RecipesApiService) { }

  ngOnInit(): void {
    this.recipesAPI.getRecipes();
  }

}
