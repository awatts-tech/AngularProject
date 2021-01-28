import { Component, OnInit } from '@angular/core';
import { RecipesApiService } from '../recipes-api.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  searchTerm: string = "";

  constructor(public recipeAPI: RecipesApiService) { }

  search() {
    console.log("search was called");
    this.recipeAPI.getRecipesBySearchTerm(this.searchTerm);
  }

  ngOnInit(): void {
    this.recipeAPI.getRecipes();
  }
}